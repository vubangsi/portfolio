const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Read and evaluate the TypeScript file to get projects data
const projectsTsPath = path.join(__dirname, '../src/data/projects.ts');
const projectsTsContent = fs.readFileSync(projectsTsPath, 'utf8');

// Extract the projects array from the TypeScript file
const projectsMatch = projectsTsContent.match(/export const projects: Project\[\] = (\[.*?\]);/s);
if (!projectsMatch) {
  throw new Error('Could not find projects data in projects.ts');
}

// Evaluate the projects array in a safe way
const projects = new Function(`
  const projects = ${projectsMatch[1]};
  return projects.map(p => ({
    ...p,
    // Ensure all required fields are present
    id: p.id || 'unknown',
    title: p.title || 'Untitled Project',
    description: p.description || '',
    longDescription: p.longDescription || p.description || '',
    image: p.image || '',
    screenshots: Array.isArray(p.screenshots) ? p.screenshots : [],
    technologies: Array.isArray(p.technologies) ? p.technologies : [],
    category: p.category || 'Software Engineering',
    featured: !!p.featured,
    githubUrl: p.githubUrl || '',
    liveUrl: p.liveUrl || '',
    status: p.status || 'completed',
    year: typeof p.year === 'number' ? p.year : new Date().getFullYear(),
    features: Array.isArray(p.features) ? p.features : [],
    metrics: Array.isArray(p.metrics) ? p.metrics : [],
    challenges: Array.isArray(p.challenges) ? p.challenges : [],
    learnings: Array.isArray(p.learnings) ? p.learnings : []
  }));
`)();

// Create projects directory if it doesn't exist
const projectsDir = path.join(__dirname, '../public/projects');
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// Generate a single project image
function generateProjectImage(project, width = 1200, height = 630) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#3b82f6'); // blue-500
  gradient.addColorStop(1, '#8b5cf6'); // purple-500
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Add project title
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Title
  ctx.font = 'bold 48px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  wrapText(ctx, project.title, width / 2, height / 2 - 30, width - 100, 60);
  
  // Subtitle
  ctx.font = '24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  ctx.fillText(project.category, width / 2, height / 2 + 50);
  
  // Save to file
  const filename = `${project.id}.jpg`;
  const filepath = path.join(projectsDir, filename);
  const out = fs.createWriteStream(filepath);
  const stream = canvas.createJPEGStream({
    quality: 0.9,
    chromaSubsampling: false
  });
  
  return new Promise((resolve, reject) => {
    stream.pipe(out);
    out.on('finish', () => {
      console.log(`Generated ${filename}`);
      resolve(filepath);
    });
    out.on('error', reject);
  });
}

// Helper function to wrap text
function wrapText(context, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  const lines = [];
  
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = context.measureText(testLine);
    const testWidth = metrics.width;
    
    if (testWidth > maxWidth && n > 0) {
      lines.push(line.trim());
      line = words[n] + ' ';
    } else {
      line = testLine;
    }
  }
  
  lines.push(line.trim());
  
  for (let i = 0; i < lines.length; i++) {
    context.fillText(lines[i], x, y + (i * lineHeight));
  }
}

// Generate images for all projects
async function generateAllImages() {
  try {
    for (const project of projects) {
      await generateProjectImage(project);
      
      // Generate screenshots if they don't exist
      if (project.screenshots && project.screenshots.length > 0) {
        for (let i = 0; i < project.screenshots.length; i++) {
          const screenshotName = `${project.id}-screenshot-${i + 1}.jpg`;
          const screenshotPath = path.join(projectsDir, screenshotName);
          
          if (!fs.existsSync(screenshotPath)) {
            await generateProjectImage(
              {
                ...project,
                title: `${project.title} (Screenshot ${i + 1})`,
                category: 'Preview'
              },
              1280,
              720
            );
            
            // Update the screenshot path in the project data
            project.screenshots[i] = `/projects/${screenshotName}`;
          }
        }
      }
      
      // Update the main project image path
      project.image = `/projects/${project.id}.jpg`;
    }
    
    // Update the projects data file
    const projectsFile = path.join(__dirname, '../src/data/projects.ts');
    let content = fs.readFileSync(projectsFile, 'utf8');
    content = content.replace(
      /export const projects: Project\[\] = (\[.*?\]);/s,
      `export const projects: Project[] = ${JSON.stringify(projects, null, 2)};`
    );
    
    fs.writeFileSync(projectsFile, content, 'utf8');
    console.log('✅ Project images generated successfully!');
  } catch (error) {
    console.error('❌ Error generating project images:', error);
  }
}

// Run the script
generateAllImages();

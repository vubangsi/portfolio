import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const company = data.get('company');
    const projectType = data.get('project-type');
    const message = data.get('message');
    const newsletter = data.get('newsletter');

    // Basic validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({
        error: 'Missing required fields'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Here you would typically:
    // 1. Send email via service like SendGrid, Resend, etc.
    // 2. Save to database
    // 3. Send to CRM system
    // 4. Add to mailing list if newsletter is checked

    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      name,
      email,
      company: company || 'Not provided',
      projectType: projectType || 'Not specified',
      message,
      newsletter: newsletter === 'on',
      timestamp: new Date().toISOString()
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return new Response(JSON.stringify({
      success: true,
      message: 'Message sent successfully!'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Contact form error:', error);

    return new Response(JSON.stringify({
      error: 'Failed to send message. Please try again.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

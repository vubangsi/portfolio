// Projects data for the portfolio
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  screenshots?: string[];
  technologies: string[];
  category: 'ML/AI' | 'Computer Vision' | 'NLP' | 'Deep Learning' | 'Software Engineering' | 'Research';
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress' | 'published';
  year: number;
  features?: string[];
  metrics?: { label: string; value: string }[];
  challenges?: string[];
  learnings?: string[];
}

export const projects: Project[] = [
  {
    id: 'neural-network-optimizer',
    title: 'Neural Network Optimizer',
    description: 'Neural Network Optimization Framework. Advanced ML model optimization with automated hyperparameter tuning and distributed training capabilities.',
    longDescription: 'A comprehensive neural network optimization framework that automatically tunes hyperparameters and model architectures. Features include Bayesian optimization, automated feature engineering, and distributed training capabilities.',
    image: '/projects/neural-optimizer.jpg',
    screenshots: [
      '/projects/placeholder.svg',
      '/projects/placeholder.svg',
      '/projects/placeholder.svg'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Kubernetes', 'Docker'],
    category: 'Deep Learning',
    featured: true,
    githubUrl: 'https://github.com/mercelvubangsi/neural-optimizer',
    status: 'completed',
    year: 2024,
    features: [
      'Automated hyperparameter optimization using Bayesian methods',
      'Distributed training across multiple GPUs and nodes',
      'Model architecture search and optimization',
      'Real-time performance monitoring and visualization',
      'Integration with popular ML frameworks (TensorFlow, PyTorch)',
      'Automated feature engineering pipeline',
      'Experiment tracking and model versioning'
    ],
    metrics: [
      { label: 'Model Performance Improvement', value: '35%' },
      { label: 'Training Time Reduction', value: '60%' },
      { label: 'Active Users', value: '10,000+' },
      { label: 'Models Optimized', value: '50,000+' }
    ],
    challenges: [
      'Scaling optimization algorithms across distributed systems',
      'Handling different model architectures and frameworks',
      'Real-time synchronization of hyperparameters',
      'Memory management for large-scale optimization'
    ],
    learnings: [
      'Advanced distributed computing techniques',
      'Bayesian optimization in practice',
      'Model architecture design patterns',
      'Performance optimization strategies'
    ]
  },
  {
    id: 'computer-vision-api',
    title: 'Real-time Object Detection Service',
    description: 'High-performance computer vision API serving thousands of requests per minute with sub-100ms latency.',
    longDescription: 'Scalable computer vision service built with YOLOv5 and FastAPI. Processes thousands of requests per minute with sub-100ms latency. Includes custom model training pipeline and web dashboard.',
    image: '/projects/cv-api.jpg',
    screenshots: [
      '/projects/placeholder.svg',
      '/projects/placeholder.svg',
      '/projects/placeholder.svg'
    ],
    technologies: ['Python', 'FastAPI', 'YOLOv5', 'OpenCV', 'Redis', 'PostgreSQL'],
    category: 'Computer Vision',
    featured: true,
    liveUrl: 'https://cv-api-demo.com',
    status: 'completed',
    year: 2024,
    features: [
      'Real-time object detection with 99.2% accuracy',
      'Sub-100ms response time for API calls',
      'Scalable architecture supporting 10,000+ requests/minute',
      'Custom model training pipeline with transfer learning',
      'Interactive web dashboard for monitoring and management',
      'RESTful API with comprehensive documentation',
      'Batch processing capabilities for large datasets',
      'Model versioning and A/B testing framework'
    ],
    metrics: [
      { label: 'API Response Time', value: '<100ms' },
      { label: 'Model Accuracy', value: '99.2%' },
      { label: 'Requests per Minute', value: '10,000+' },
      { label: 'Uptime', value: '99.9%' }
    ],
    challenges: [
      'Optimizing model inference for real-time performance',
      'Scaling API to handle concurrent requests efficiently',
      'Managing GPU memory for multiple model instances',
      'Implementing robust error handling and monitoring'
    ],
    learnings: [
      'Advanced model optimization techniques',
      'High-performance API design patterns',
      'Container orchestration with Kubernetes',
      'Real-time monitoring and alerting systems'
    ]
  },
  {
    id: 'nlp-sentiment-analyzer',
    title: 'Multi-language Sentiment Analysis',
    description: 'Advanced NLP model supporting 15+ languages with 95%+ accuracy and real-time processing.',
    longDescription: 'Transformer-based sentiment analysis system supporting 15+ languages with 95%+ accuracy. Features real-time processing, custom training data, and RESTful API integration.',
    image: '/projects/nlp-sentiment.jpg',
    technologies: ['Python', 'Hugging Face', 'Transformers', 'FastAPI', 'MongoDB'],
    category: 'NLP',
    featured: true,
    githubUrl: 'https://github.com/mercelvubangsi/sentiment-analyzer',
    status: 'completed',
    year: 2023
  },
  {
    id: 'ai-code-reviewer',
    title: 'AI-Powered Code Review System',
    description: 'Intelligent code analysis using graph neural networks to detect bugs and suggest improvements.',
    longDescription: 'Intelligent code review system using graph neural networks to analyze code patterns, detect bugs, and suggest improvements. Integrates with GitHub, GitLab, and Bitbucket.',
    image: '/projects/ai-reviewer.jpg',
    technologies: ['Python', 'Graph Neural Networks', 'AST', 'Flask', 'GitHub API'],
    category: 'ML/AI',
    featured: false,
    githubUrl: 'https://github.com/mercelvubangsi/ai-code-reviewer',
    status: 'completed',
    year: 2024
  },
  {
    id: 'predictive-maintenance',
    title: 'Industrial IoT Analytics Platform',
    description: 'Predictive maintenance solution using time-series analysis and anomaly detection for manufacturing.',
    longDescription: 'End-to-end predictive maintenance solution for manufacturing plants. Uses time-series analysis and anomaly detection to predict equipment failures before they occur.',
    image: '/projects/predictive-maintenance.jpg',
    technologies: ['Python', 'TensorFlow', 'InfluxDB', 'Grafana', 'Apache Kafka'],
    category: 'ML/AI',
    featured: false,
    status: 'completed',
    year: 2023
  },
  {
    id: 'facial-recognition-system',
    title: 'Advanced Facial Recognition Suite',
    description: 'State-of-the-art facial recognition with emotion detection, age estimation, and real-time video processing.',
    longDescription: 'State-of-the-art facial recognition system with 99.7% accuracy. Includes emotion detection, age estimation, and real-time video processing capabilities.',
    image: '/projects/facial-recognition.jpg',
    technologies: ['Python', 'OpenCV', 'dlib', 'TensorFlow', 'React'],
    category: 'Computer Vision',
    featured: false,
    liveUrl: 'https://face-rec-demo.com',
    status: 'completed',
    year: 2023
  },
  {
    id: 'chatbot-framework',
    title: 'Enterprise Chatbot Platform',
    description: 'Scalable conversational AI framework supporting multiple languages and enterprise integrations.',
    longDescription: 'Enterprise-grade chatbot platform supporting multiple languages and integrations. Features natural language understanding, context management, and analytics dashboard.',
    image: '/projects/chatbot-framework.jpg',
    technologies: ['Node.js', 'Python', 'Rasa', 'MongoDB', 'Docker', 'Kubernetes'],
    category: 'NLP',
    featured: false,
    githubUrl: 'https://github.com/mercelvubangsi/chatbot-framework',
    status: 'completed',
    year: 2023
  },
  {
    id: 'medical-image-analysis',
    title: 'Medical Imaging Analysis Platform',
    description: 'AI-powered diagnostic assistance using deep learning for X-rays, MRIs, and CT scans.',
    longDescription: 'Comprehensive medical imaging analysis platform using deep learning for X-rays, MRIs, and CT scans. Helps radiologists with faster and more accurate diagnoses.',
    image: '/projects/medical-imaging.jpg',
    technologies: ['Python', 'PyTorch', 'DICOM', 'FastAPI', 'React', 'PostgreSQL'],
    category: 'Computer Vision',
    featured: true,
    status: 'in-progress',
    year: 2024
  },
  {
    id: 'recommendation-engine',
    title: 'Personalized Recommendation Engine',
    description: 'High-performance ML system serving millions of users with collaborative and content-based filtering.',
    longDescription: 'High-performance recommendation system serving millions of users. Combines collaborative filtering, content-based filtering, and deep learning approaches.',
    image: '/projects/recommendation-engine.jpg',
    technologies: ['Python', 'Apache Spark', 'Redis', 'PostgreSQL', 'Kubernetes'],
    category: 'ML/AI',
    featured: false,
    status: 'completed',
    year: 2023
  },
  {
    id: 'autonomous-trading-bot',
    title: 'AI Trading Assistant',
    description: 'AI Trading Intelligence System. Advanced trading bot using reinforcement learning and time-series analysis for market insights.',
    longDescription: 'Advanced trading system using reinforcement learning and time-series analysis. Provides real-time market insights and automated trading strategies.',
    image: '/projects/trading-bot.jpg',
    technologies: ['Python', 'TensorFlow', 'ccxt', 'WebSocket', 'Redis'],
    category: 'ML/AI',
    featured: false,
    status: 'completed',
    year: 2023
  },
  {
    id: 'voice-synthesis',
    title: 'Neural Voice Synthesis Platform',
    description: 'State-of-the-art text-to-speech with voice cloning and multi-language support using WaveNet architecture.',
    longDescription: 'State-of-the-art text-to-speech system using WaveNet and Tacotron architectures. Supports multiple languages and voice cloning from short audio samples.',
    image: '/projects/voice-synthesis.jpg',
    technologies: ['Python', 'PyTorch', 'Librosa', 'FastAPI', 'React'],
    category: 'Deep Learning',
    featured: false,
    githubUrl: 'https://github.com/mercelvubangsi/voice-synthesis',
    status: 'completed',
    year: 2024
  },
  {
    id: 'anomaly-detection',
    title: 'Real-time Anomaly Detection System',
    description: 'Unsupervised learning platform for monitoring system metrics, user behavior, and business KPIs.',
    longDescription: 'Advanced anomaly detection system using autoencoders and isolation forests. Monitors system metrics, user behavior, and business KPIs in real-time.',
    image: '/projects/anomaly-detection.jpg',
    technologies: ['Python', 'TensorFlow', 'Apache Kafka', 'Elasticsearch', 'Kibana'],
    category: 'ML/AI',
    featured: false,
    status: 'completed',
    year: 2023
  },
  {
    id: 'ai-research-platform',
    title: 'AI Research Collaboration Hub',
    description: 'Open-source platform for researchers featuring model versioning, experiment tracking, and peer review.',
    longDescription: 'Collaborative platform for AI researchers featuring model versioning, experiment tracking, and peer review system. Built for the research community.',
    image: '/projects/research-platform.jpg',
    technologies: ['React', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'MLflow'],
    category: 'Software Engineering',
    featured: false,
    githubUrl: 'https://github.com/mercelvubangsi/ai-research-platform',
    status: 'published',
    year: 2024
  },
  {
    id: 'smart-city-traffic',
    title: 'Smart City Traffic Optimization',
    description: 'Intelligent traffic management using computer vision and reinforcement learning for urban planning.',
    longDescription: 'Intelligent traffic management system using computer vision and reinforcement learning to optimize traffic flow and reduce congestion in smart cities.',
    image: '/projects/smart-traffic.jpg',
    technologies: ['Python', 'OpenCV', 'TensorFlow', 'Apache Kafka', 'InfluxDB'],
    category: 'Computer Vision',
    featured: false,
    status: 'in-progress',
    year: 2024
  },
  {
    id: 'drug-discovery-ml',
    title: 'Drug Discovery Acceleration Platform',
    description: 'AI-driven pharmaceutical research platform using molecular property prediction and generative chemistry.',
    longDescription: 'AI platform that accelerates drug discovery using molecular property prediction, virtual screening, and generative chemistry models.',
    image: '/projects/drug-discovery.jpg',
    technologies: ['Python', 'RDKit', 'PyTorch', 'CUDA', 'FastAPI'],
    category: 'Research',
    featured: true,
    status: 'in-progress',
    year: 2024
  }
];

export const categories = [
  'All',
  'ML/AI',
  'Computer Vision',
  'NLP',
  'Deep Learning',
  'Software Engineering',
  'Research'
] as const;

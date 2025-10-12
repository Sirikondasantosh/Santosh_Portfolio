// ========================================
// Modern Compact Portfolio JavaScript
// ========================================

// Profile Image Loading
document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.getElementById('profileImg');
    const placeholder = document.querySelector('.profile-photo-placeholder');
    
    if (profileImg) {
        profileImg.onload = function() {
            this.style.display = 'block';
            if (placeholder) placeholder.style.display = 'none';
        };
        
        profileImg.onerror = function() {
            this.style.display = 'none';
            if (placeholder) placeholder.style.display = 'flex';
        };
        
        // Force reload if image is cached incorrectly
        if (profileImg.complete && profileImg.naturalHeight === 0) {
            profileImg.src = profileImg.src + '?t=' + Date.now();
        }
    }
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Profile image handling
const profileImg = document.getElementById('profileImg');
const imagePlaceholder = document.querySelector('.image-placeholder');

if (profileImg && imagePlaceholder) {
    // Always show the image if it exists
    profileImg.style.display = 'block';
    imagePlaceholder.style.display = 'none';
    
    profileImg.onload = function() {
        this.classList.add('loaded');
        imagePlaceholder.style.display = 'none';
    };
    
    profileImg.onerror = function() {
        // Only show placeholder if image fails to load
        this.style.display = 'none';
        imagePlaceholder.style.display = 'flex';
    };
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.stat-card, .skill-category, .project-card, .experience-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Typing animation for hero
const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

if (typedText && cursor) {
    const texts = [
        'AI/ML Engineer',
        'Full Stack Developer',
        'Data Engineer',
        'MLOps Specialist'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typedText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    // Start typing animation after page load
    setTimeout(typeWriter, 1000);
}

// Add active class to nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Process Flow Interactions
const initializeProcessFlow = () => {
    const processSteps = document.querySelectorAll('.process-step');
    const descriptions = document.querySelectorAll('.step-description');
    
    processSteps.forEach((step, index) => {
        step.addEventListener('mouseenter', () => {
            // Remove active class from all descriptions
            descriptions.forEach(desc => desc.classList.remove('active'));
            // Add active class to corresponding description
            descriptions[index].classList.add('active');
            
            // Add glow effect to step
            step.style.filter = 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))';
        });
        
        step.addEventListener('mouseleave', () => {
            // Remove glow effect
            step.style.filter = '';
        });
        
        step.addEventListener('click', () => {
            // Toggle description visibility
            const desc = descriptions[index];
            if (desc.classList.contains('active')) {
                desc.classList.remove('active');
            } else {
                descriptions.forEach(d => d.classList.remove('active'));
                desc.classList.add('active');
            }
        });
    });
};

// Technology Bubble Interactions
const initializeTechBubbles = () => {
    const techBubbles = document.querySelectorAll('.tech-bubble');
    
    techBubbles.forEach(bubble => {
        bubble.addEventListener('mouseenter', () => {
            bubble.style.transform = 'scale(1.15) translateY(-5px)';
        });
        
        bubble.addEventListener('mouseleave', () => {
            bubble.style.transform = 'scale(1) translateY(0)';
        });
    });
};

// Role Node Interactions
const initializeRoleNodes = () => {
    const roleNodes = document.querySelectorAll('.role-node');
    
    roleNodes.forEach(node => {
        node.addEventListener('click', () => {
            // Add pulse animation
            node.style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
                node.style.animation = '';
            }, 600);
        });
    });
};

// Interactive Timeline Chart
const initializeTimelineChart = () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            // Add glow effect to timeline marker
            const marker = item.querySelector('.timeline-marker');
            marker.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.4)';
            
            // Scale up the marker
            marker.style.transform = 'scale(1.2)';
        });
        
        item.addEventListener('mouseleave', () => {
            const marker = item.querySelector('.timeline-marker');
            marker.style.boxShadow = '';
            marker.style.transform = 'scale(1)';
        });
        
        item.addEventListener('click', () => {
            // Add pulse animation
            item.style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
                item.style.animation = '';
            }, 600);
        });
    });
};

// Interactive Project Cards
const initializeProjectCards = () => {
    const projectCards = document.querySelectorAll('.project-card-compact');
    
    projectCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            // Add glow effect
            card.style.filter = 'drop-shadow(0 0 25px rgba(59, 130, 246, 0.4))';
            
            // Animate stats
            const stats = card.querySelectorAll('.stat');
            stats.forEach((stat, statIndex) => {
                setTimeout(() => {
                    stat.style.transform = 'scale(1.05)';
                    stat.style.background = 'rgba(59, 130, 246, 0.15)';
                }, statIndex * 100);
            });
            
            // Animate tech tags
            const techTags = card.querySelectorAll('.project-tech-compact span');
            techTags.forEach((tag, tagIndex) => {
                setTimeout(() => {
                    tag.style.transform = 'scale(1.1)';
                    tag.style.background = 'rgba(59, 130, 246, 0.3)';
                }, tagIndex * 50);
            });
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.filter = '';
            
            // Reset stats
            const stats = card.querySelectorAll('.stat');
            stats.forEach(stat => {
                stat.style.transform = 'scale(1)';
                stat.style.background = 'rgba(255, 255, 255, 0.05)';
            });
            
            // Reset tech tags
            const techTags = card.querySelectorAll('.project-tech-compact span');
            techTags.forEach(tag => {
                tag.style.transform = 'scale(1)';
                tag.style.background = 'rgba(59, 130, 246, 0.1)';
            });
        });
        
        card.addEventListener('click', () => {
            // Add click animation
            card.style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
                card.style.animation = '';
            }, 600);
            
            // Show project details
            showProjectDetails(card.dataset.project);
        });
    });
};

// Show project details function
const showProjectDetails = (projectType) => {
    const projectDetails = {
        'ai-ml': {
            title: 'AI Recommendation Engine',
            description: 'Production-grade machine learning system with advanced collaborative filtering',
            technologies: ['PyTorch', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker'],
            metrics: {
                accuracy: '95%',
                throughput: '10TB+ daily',
                latency: '<100ms',
                users: '1M+'
            }
        },
        'computer-vision': {
            title: 'Real-time Object Detection',
            description: 'YOLOv8-based computer vision system for industrial automation',
            technologies: ['OpenCV', 'PyTorch', 'Docker', 'Kubernetes', 'NVIDIA GPU'],
            metrics: {
                precision: '97%',
                fps: '60',
                latency: '<16ms',
                accuracy: '95%'
            }
        },
        'data-engineering': {
            title: 'Scalable Data Pipeline',
            description: 'High-throughput ETL platform for big data processing',
            technologies: ['Apache Kafka', 'Spark', 'Airflow', 'Docker', 'AWS'],
            metrics: {
                throughput: '10TB daily',
                latency: '<1s',
                uptime: '99.9%',
                nodes: '50+'
            }
        },
        'nlp': {
            title: 'Sentiment Analysis API',
            description: 'BERT-based natural language processing API for customer insights',
            technologies: ['BERT', 'Transformers', 'FastAPI', 'Redis', 'Docker'],
            metrics: {
                accuracy: '94%',
                volume: '1M+ daily',
                latency: '<200ms',
                languages: '5+'
            }
        }
    };
    
    const details = projectDetails[projectType];
    if (details) {
        console.log(`Project Details: ${details.title}`, details);
        // You can implement a modal here to show detailed information
    }
};

// Interactive Testimonial Cards
const initializeTestimonialCards = () => {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            // Add glow effect
            card.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.2)';
            
            // Animate stars
            const stars = card.querySelectorAll('.star');
            stars.forEach((star, starIndex) => {
                star.style.animation = `starTwinkle 1s ease-in-out infinite ${starIndex * 0.1}s`;
            });
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
            const stars = card.querySelectorAll('.star');
            stars.forEach(star => {
                star.style.animation = '';
            });
        });
        
        card.addEventListener('click', () => {
            // Add pulse animation
            card.style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
                card.style.animation = '';
            }, 600);
        });
    });
};

// Interactive Citation Stats
const initializeCitationStats = () => {
    const citationItems = document.querySelectorAll('.citation-item');
    
    citationItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Add glow effect
            item.style.boxShadow = '0 15px 30px rgba(16, 185, 129, 0.3)';
            
            // Animate icon
            const icon = item.querySelector('.citation-icon');
            if (icon) {
                icon.style.animation = 'citationBounce 1s ease-in-out infinite';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.boxShadow = '';
            const icon = item.querySelector('.citation-icon');
            if (icon) {
                icon.style.animation = 'citationBounce 2s ease-in-out infinite';
            }
        });
    });
};

// Create ripple effect
const createRipple = (element) => {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = rect.width / 2 - size / 2;
    const y = rect.height / 2 - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(59, 130, 246, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 1000;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
};

// Add ripple animation CSS
const addRippleAnimation = () => {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
};

// Professional Animated Skill Map Interactions
const initializeAnimatedSkillMap = () => {
    const roleNodes = document.querySelectorAll('.role-node');
    const centralNode = document.querySelector('.central-node');
    
    roleNodes.forEach((node, index) => {
        node.addEventListener('mouseenter', () => {
            // Add glow effect to node
            node.style.filter = 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.6))';
            
            // Animate central node
            if (centralNode) {
                centralNode.style.transform = 'translate(-50%, -50%) scale(1.05)';
                centralNode.style.filter = 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))';
            }
            
            // Create particle burst effect
            createParticleBurst(node);
        });
        
        node.addEventListener('mouseleave', () => {
            node.style.filter = '';
            if (centralNode) {
                centralNode.style.transform = 'translate(-50%, -50%) scale(1)';
                centralNode.style.filter = '';
            }
        });
        
        node.addEventListener('click', () => {
            // Add click animation
            node.style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
                node.style.animation = '';
            }, 600);
            
            // Show detailed info modal (optional)
            showNodeDetails(node.dataset.role);
        });
    });
    
    // Central node interactions
    if (centralNode) {
        centralNode.addEventListener('mouseenter', () => {
            centralNode.style.transform = 'translate(-50%, -50%) scale(1.02)';
        });
        
        centralNode.addEventListener('mouseleave', () => {
            centralNode.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    }
};

// Create particle burst effect
const createParticleBurst = (element) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: var(--primary);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${centerX}px;
            top: ${centerY}px;
        `;
        
        document.body.appendChild(particle);
        
        const angle = (i / 8) * Math.PI * 2;
        const velocity = 50 + Math.random() * 50;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;
        
        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${x}px, ${y}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => {
            particle.remove();
        };
    }
};

// Show node details (optional modal)
const showNodeDetails = (role) => {
    const roleDetails = {
        'ai-ml': {
            title: 'AI/ML Engineer',
            description: 'Expert in machine learning algorithms, model development, and deployment.',
            skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Computer Vision', 'NLP'],
            experience: '5+ years',
            projects: '15+ ML models deployed'
        },
        'fullstack': {
            title: 'Full Stack Developer',
            description: 'Proficient in both frontend and backend development with modern frameworks.',
            skills: ['React', 'Node.js', 'TypeScript', 'Python', 'GraphQL'],
            experience: '4+ years',
            projects: '25+ web applications'
        },
        'data': {
            title: 'Data Engineer',
            description: 'Specialized in data pipeline development and big data processing.',
            skills: ['Apache Spark', 'Kafka', 'Airflow', 'PostgreSQL', 'MongoDB'],
            experience: '3+ years',
            projects: '10TB+ daily processing'
        },
        'mlops': {
            title: 'MLOps Specialist',
            description: 'Expert in machine learning operations and deployment automation.',
            skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Monitoring'],
            experience: '3+ years',
            projects: '60% faster deployments'
        }
    };
    
    const details = roleDetails[role];
    if (details) {
        console.log(`Role Details: ${details.title}`, details);
        // You can implement a modal here to show detailed information
    }
};

// Compact Skills Grid Interactions
const initializeCompactSkillsGrid = () => {
    const skillCategories = document.querySelectorAll('.skill-category-compact');
    const centralIdentity = document.querySelector('.central-identity-compact');
    
    skillCategories.forEach((category, index) => {
        category.addEventListener('mouseenter', () => {
            // Add glow effect to category
            category.style.filter = 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))';
            
            // Animate central identity
            if (centralIdentity) {
                centralIdentity.style.transform = 'scale(1.02)';
                centralIdentity.style.filter = 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.3))';
            }
            
            // Highlight tech tags
            const techTags = category.querySelectorAll('.category-techs span');
            techTags.forEach((tag, tagIndex) => {
                setTimeout(() => {
                    tag.style.transform = 'scale(1.1)';
                    tag.style.background = 'rgba(59, 130, 246, 0.3)';
                }, tagIndex * 50);
            });
        });
        
        category.addEventListener('mouseleave', () => {
            category.style.filter = '';
            if (centralIdentity) {
                centralIdentity.style.transform = 'scale(1)';
                centralIdentity.style.filter = '';
            }
            
            // Reset tech tags
            const techTags = category.querySelectorAll('.category-techs span');
            techTags.forEach(tag => {
                tag.style.transform = 'scale(1)';
                tag.style.background = 'rgba(59, 130, 246, 0.1)';
            });
        });
        
        category.addEventListener('click', () => {
            // Add click animation
            category.style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
                category.style.animation = '';
            }, 600);
            
            // Show category details
            showCategoryDetails(category.dataset.category);
        });
    });
    
    // Central identity interactions
    if (centralIdentity) {
        centralIdentity.addEventListener('click', () => {
            centralIdentity.style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
                centralIdentity.style.animation = '';
            }, 600);
        });
    }
};

// Show category details function
const showCategoryDetails = (categoryType) => {
    const categoryDetails = {
        'ai-ml': {
            title: 'AI/ML Technologies',
            description: 'Expert in machine learning frameworks and AI development',
            experience: '5+ years',
            projects: '15+ ML models deployed'
        },
        'fullstack': {
            title: 'Full Stack Development',
            description: 'End-to-end web application development',
            experience: '4+ years',
            projects: '25+ web applications'
        },
        'data': {
            title: 'Data Engineering',
            description: 'Big data processing and pipeline development',
            experience: '3+ years',
            projects: '10TB+ daily processing'
        },
        'cloud': {
            title: 'Cloud Infrastructure',
            description: 'Multi-cloud deployment and management',
            experience: '4+ years',
            projects: '50+ cloud deployments'
        },
        'mlops': {
            title: 'MLOps & DevOps',
            description: 'Machine learning operations and automation',
            experience: '3+ years',
            projects: '60% faster deployments'
        },
        'analytics': {
            title: 'Data Analytics',
            description: 'Business intelligence and data visualization',
            experience: '3+ years',
            projects: '100+ dashboards created'
        }
    };
    
    const details = categoryDetails[categoryType];
    if (details) {
        console.log(`Category Details: ${details.title}`, details);
        // You can implement a modal or tooltip here
    }
};

// Tech Ecosystem Interactions
const initializeTechEcosystem = () => {
    const ecosystemNodes = document.querySelectorAll('.ecosystem-node');
    const centerNode = document.querySelector('.center-node');
    
    ecosystemNodes.forEach((node, index) => {
        node.addEventListener('mouseenter', () => {
            // Add glow effect to node
            node.style.filter = 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.6))';
            
            // Animate center node
            if (centerNode) {
                centerNode.style.transform = 'translate(-50%, -50%) scale(1.1)';
                centerNode.style.filter = 'drop-shadow(0 0 25px rgba(59, 130, 246, 0.5))';
            }
            
            // Highlight tech tags
            const techTags = node.querySelectorAll('.node-techs span');
            techTags.forEach((tag, tagIndex) => {
                setTimeout(() => {
                    tag.style.transform = 'scale(1.1)';
                    tag.style.background = 'rgba(59, 130, 246, 0.3)';
                }, tagIndex * 100);
            });
        });
        
        node.addEventListener('mouseleave', () => {
            node.style.filter = '';
            if (centerNode) {
                centerNode.style.transform = 'translate(-50%, -50%) scale(1)';
                centerNode.style.filter = '';
            }
            
            // Reset tech tags
            const techTags = node.querySelectorAll('.node-techs span');
            techTags.forEach(tag => {
                tag.style.transform = 'scale(1)';
                tag.style.background = 'rgba(59, 130, 246, 0.1)';
            });
        });
        
        node.addEventListener('click', () => {
            // Add click animation
            node.style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
                node.style.animation = '';
            }, 600);
            
            // Show detailed tech info
            showTechDetails(node.dataset.tech);
        });
    });
    
    // Center node interactions
    if (centerNode) {
        centerNode.addEventListener('click', () => {
            centerNode.style.animation = 'centerPulse 0.5s ease-in-out';
            setTimeout(() => {
                centerNode.style.animation = 'centerPulse 3s ease-in-out infinite';
            }, 500);
        });
    }
};

// Pipeline Diagram Interactions
const initializePipelineDiagram = () => {
    const pipelineSteps = document.querySelectorAll('.pipeline-step');
    const pipelineArrows = document.querySelectorAll('.pipeline-arrow');
    
    pipelineSteps.forEach((step, index) => {
        step.addEventListener('mouseenter', () => {
            // Add glow effect to step
            step.style.filter = 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))';
            step.style.background = 'rgba(59, 130, 246, 0.15)';
            
            // Animate arrows
            if (pipelineArrows[index]) {
                pipelineArrows[index].style.color = '#22c55e';
                pipelineArrows[index].style.transform = 'scale(1.2)';
            }
        });
        
        step.addEventListener('mouseleave', () => {
            step.style.filter = '';
            step.style.background = 'rgba(255, 255, 255, 0.05)';
            
            if (pipelineArrows[index]) {
                pipelineArrows[index].style.color = 'var(--primary)';
                pipelineArrows[index].style.transform = 'scale(1)';
            }
        });
        
        step.addEventListener('click', () => {
            // Add pulse animation
            step.style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
                step.style.animation = '';
            }, 600);
            
            // Show pipeline step details
            showPipelineStepDetails(index);
        });
    });
};

// Show tech details function
const showTechDetails = (techType) => {
    const techDetails = {
        'ai-ml': {
            title: 'AI/ML Technologies',
            description: 'Expert in machine learning frameworks and AI development',
            tools: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'LangChain', 'OpenCV'],
            experience: '5+ years',
            projects: '15+ ML models deployed'
        },
        'fullstack': {
            title: 'Full Stack Development',
            description: 'End-to-end web application development',
            tools: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'Next.js', 'Vue.js'],
            experience: '4+ years',
            projects: '25+ web applications'
        },
        'cloud': {
            title: 'Cloud Infrastructure',
            description: 'Multi-cloud deployment and management',
            tools: ['AWS', 'GCP', 'Azure', 'Kubernetes', 'Docker', 'Terraform'],
            experience: '4+ years',
            projects: '50+ cloud deployments'
        },
        'data': {
            title: 'Data Engineering',
            description: 'Big data processing and pipeline development',
            tools: ['Apache Spark', 'Kafka', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
            experience: '3+ years',
            projects: '10TB+ daily processing'
        },
        'mlops': {
            title: 'MLOps & DevOps',
            description: 'Machine learning operations and automation',
            tools: ['Docker', 'Jenkins', 'MLflow', 'Airflow', 'GitHub Actions', 'Kubeflow'],
            experience: '3+ years',
            projects: '60% faster deployments'
        },
        'analytics': {
            title: 'Data Analytics',
            description: 'Business intelligence and data visualization',
            tools: ['Power BI', 'Tableau', 'Looker', 'dbt', 'BigQuery', 'Snowflake'],
            experience: '3+ years',
            projects: '100+ dashboards created'
        }
    };
    
    const details = techDetails[techType];
    if (details) {
        console.log(`Tech Details: ${details.title}`, details);
        // You can implement a modal or tooltip here
    }
};

// Show pipeline step details function
const showPipelineStepDetails = (stepIndex) => {
    const stepDetails = [
        {
            title: 'Data Ingestion',
            description: 'Automated data collection from multiple sources',
            tools: ['Kafka', 'AWS Kinesis', 'Google Pub/Sub', 'Apache Airflow']
        },
        {
            title: 'Data Processing',
            description: 'ETL pipelines for data transformation and cleaning',
            tools: ['Apache Spark', 'Apache Beam', 'dbt', 'Python']
        },
        {
            title: 'Model Training',
            description: 'Automated ML model training and validation',
            tools: ['TensorFlow', 'PyTorch', 'MLflow', 'Kubeflow']
        },
        {
            title: 'Model Deployment',
            description: 'Automated model deployment and monitoring',
            tools: ['Docker', 'Kubernetes', 'AWS SageMaker', 'MLflow']
        }
    ];
    
    const details = stepDetails[stepIndex];
    if (details) {
        console.log(`Pipeline Step: ${details.title}`, details);
        // You can implement a modal or tooltip here
    }
};

// Knowledge Transfer Process Interactions
const initializeKnowledgeTransfer = () => {
    const transferSteps = document.querySelectorAll('.transfer-step');
    
    transferSteps.forEach((step, index) => {
        step.addEventListener('mouseenter', () => {
            // Add glow effect to step
            step.style.filter = 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))';
        });
        
        step.addEventListener('mouseleave', () => {
            step.style.filter = '';
        });
        
        step.addEventListener('click', () => {
            // Add pulse animation
            step.style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
                step.style.animation = '';
            }, 600);
        });
    });
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Portfolio loaded successfully!');
    
    // Add ripple animation CSS
    addRippleAnimation();
    
    // Add smooth reveal animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
    
        // Initialize all interactive visualizations
        initializeCompactSkillsGrid();
        initializeTechEcosystem();
        initializePipelineDiagram();
        initializeKnowledgeTransfer();
        initializeTimelineChart();
        initializeProjectCards();
        initializeCitationStats();
});
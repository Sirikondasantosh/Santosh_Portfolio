// Modern Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeHero();
    initializeSkills();
    initializeProjects();
    initializeContact();
    initializeProfileImage();
    initializeScrollAnimations();
    initializeParticleSystem();
});

// ========================================
// Navigation
// ========================================

function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Navbar scroll effect
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Active section highlighting
    window.addEventListener('scroll', updateActiveSection);
}

function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ========================================
// Hero Section
// ========================================

function initializeHero() {
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');
    const heroActions = document.querySelector('.hero-actions');
    
    // Animate hero elements on load
    setTimeout(() => {
        if (heroTitle) heroTitle.style.opacity = '1';
    }, 200);
    
    setTimeout(() => {
        if (heroDescription) heroDescription.style.opacity = '1';
    }, 400);
    
    setTimeout(() => {
        if (heroActions) heroActions.style.opacity = '1';
    }, 600);
    
    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-background');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });
}

// ========================================
// Skills Section
// ========================================

function initializeSkills() {
    const skillCategories = document.querySelectorAll('.skill-category-compact');
    
    skillCategories.forEach((category, index) => {
        // Add staggered animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(category);
        
        // Hover effects
        category.addEventListener('mouseenter', () => {
            const techTags = category.querySelectorAll('.category-techs span');
            techTags.forEach((tag, tagIndex) => {
                setTimeout(() => {
                    tag.style.transform = 'scale(1.05)';
                    tag.style.background = 'var(--primary)';
                    tag.style.color = 'white';
                }, tagIndex * 50);
            });
        });
        
        category.addEventListener('mouseleave', () => {
            const techTags = category.querySelectorAll('.category-techs span');
            techTags.forEach(tag => {
                tag.style.transform = 'scale(1)';
                tag.style.background = 'var(--bg-tertiary)';
                tag.style.color = 'var(--text-secondary)';
            });
        });
        
        // Click animation
        category.addEventListener('click', () => {
            category.style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
                category.style.animation = '';
            }, 600);
            
            // Show skill details (you can implement a modal or tooltip here)
            showSkillDetails(category.dataset.category);
        });
    });
}

function showSkillDetails(category) {
    const skillDetails = {
        'ai-ml': {
            title: 'AI/ML Expertise',
            description: 'Advanced machine learning, deep learning, and AI model development',
            technologies: ['Python', 'TensorFlow', 'PyTorch', 'LangChain', 'scikit-learn', 'OpenCV']
        },
        'fullstack': {
            title: 'Full Stack Development',
            description: 'End-to-end web application development',
            technologies: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'Next.js', 'Vue.js']
        },
        'data': {
            title: 'Data Engineering',
            description: 'Big data processing and analytics pipelines',
            technologies: ['Spark', 'Kafka', 'PostgreSQL', 'MongoDB', 'Airflow', 'dbt']
        },
        'cloud': {
            title: 'Cloud Technologies',
            description: 'Multi-cloud deployment and management',
            technologies: ['AWS', 'GCP', 'Azure', 'Kubernetes', 'Docker', 'Terraform']
        },
        'mlops': {
            title: 'MLOps & DevOps',
            description: 'ML model deployment and CI/CD pipelines',
            technologies: ['Docker', 'Jenkins', 'MLflow', 'Airflow', 'GitHub Actions', 'Kubeflow']
        },
        'analytics': {
            title: 'Data Analytics',
            description: 'Business intelligence and data visualization',
            technologies: ['Power BI', 'Tableau', 'Looker', 'dbt', 'BigQuery', 'Snowflake']
        }
    };
    
    const details = skillDetails[category];
    if (details) {
        console.log(`${details.title}: ${details.description}`);
        console.log(`Technologies: ${details.technologies.join(', ')}`);
        // You can implement a modal or tooltip to display this information
    }
}

// ========================================
// Projects Section
// ========================================

function initializeProjects() {
    const projectCards = document.querySelectorAll('.project-card-compact');
    
    projectCards.forEach((card, index) => {
        // Staggered animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 150);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(card);
        
        // Enhanced hover effects
        card.addEventListener('mouseenter', () => {
            // Add glow effect
            card.style.boxShadow = '0 25px 50px rgba(59, 130, 246, 0.2)';
            
            // Animate stats
            const stats = card.querySelectorAll('.stat');
            stats.forEach((stat, statIndex) => {
                setTimeout(() => {
                    stat.style.transform = 'scale(1.05)';
                    stat.style.background = 'var(--primary)';
                    stat.style.color = 'white';
                }, statIndex * 100);
            });
            
            // Animate tech tags
            const techTags = card.querySelectorAll('.project-tech-compact span');
            techTags.forEach((tag, tagIndex) => {
                setTimeout(() => {
                    tag.style.transform = 'scale(1.1)';
                    tag.style.background = 'var(--primary)';
                    tag.style.color = 'white';
                }, tagIndex * 50);
            });
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
            
            // Reset stats
            const stats = card.querySelectorAll('.stat');
            stats.forEach(stat => {
                stat.style.transform = 'scale(1)';
                stat.style.background = 'var(--bg-tertiary)';
                stat.style.color = 'var(--text-primary)';
            });
            
            // Reset tech tags
            const techTags = card.querySelectorAll('.project-tech-compact span');
            techTags.forEach(tag => {
                tag.style.transform = 'scale(1)';
                tag.style.background = 'var(--bg-tertiary)';
                tag.style.color = 'var(--text-secondary)';
            });
        });
        
        // Click animation
        card.addEventListener('click', () => {
            card.style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
                card.style.animation = '';
            }, 600);
            
            // Show project details
            showProjectDetails(card.dataset.project);
        });
    });
}

function showProjectDetails(project) {
    const projectDetails = {
        'ai-ml': {
            title: 'AI Recommendation Engine',
            description: 'Production ML system with 95% accuracy processing 10TB+ daily',
            technologies: ['PyTorch', 'FastAPI', 'Redis', 'Docker', 'Kubernetes']
        },
        'computer-vision': {
            title: 'Real-time Object Detection',
            description: 'YOLOv8 system achieving 97% accuracy at 60 FPS for automation',
            technologies: ['OpenCV', 'PyTorch', 'Docker', 'TensorRT', 'ONNX']
        },
        'data-engineering': {
            title: 'Scalable Data Pipeline',
            description: 'Kafka & Spark ETL processing 10TB+ daily with <1s latency',
            technologies: ['Kafka', 'Spark', 'Airflow', 'dbt', 'Snowflake']
        },
        'nlp': {
            title: 'Sentiment Analysis API',
            description: 'BERT-based API analyzing 1M+ reviews daily with 94% accuracy',
            technologies: ['BERT', 'Transformers', 'FastAPI', 'Redis', 'Docker']
        }
    };
    
    const details = projectDetails[project];
    if (details) {
        console.log(`${details.title}: ${details.description}`);
        console.log(`Technologies: ${details.technologies.join(', ')}`);
        // You can implement a modal to display this information
    }
}

// ========================================
// Contact Section
// ========================================

function initializeContact() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('Message sent successfully!', 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    
    // Contact item hover effects
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.contact-icon');
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.contact-icon');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--success)' : type === 'error' ? 'var(--danger)' : 'var(--primary)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ========================================
// Profile Image
// ========================================

function initializeProfileImage() {
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
}

// ========================================
// Scroll Animations
// ========================================

function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.metric-card, .experience-card, .contact-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
}

// ========================================
// Particle System
// ========================================

function initializeParticleSystem() {
    const heroParticles = document.querySelector('.hero-particles');
    
    if (heroParticles) {
        // Create floating particles
        for (let i = 0; i < 20; i++) {
            createParticle(heroParticles);
        }
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 4 + 2;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(59, 130, 246, 0.3);
        border-radius: 50%;
        left: ${x}%;
        top: ${y}%;
        animation: float ${duration}s ease-in-out infinite;
        animation-delay: ${delay}s;
    `;
    
    container.appendChild(particle);
}

// ========================================
// Utility Functions
// ========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Optimize scroll events
window.addEventListener('scroll', throttle(updateActiveSection, 100));
window.addEventListener('scroll', throttle(() => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-background');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
}, 16));

// ========================================
// Performance Optimizations
// ========================================

// Preload critical images
function preloadImages() {
    const criticalImages = [
        'https://raw.githubusercontent.com/santoshsirikonda/santosh-portfolio/main/profile-photo.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadImages();

// Lazy load non-critical images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

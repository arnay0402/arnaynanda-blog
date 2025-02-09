// Blog post data structure
const BlogPost = {
    create: function(title, excerpt, imageUrl, date) {
        return {
            title,
            excerpt,
            imageUrl,
            date: new Date(date),
            formatDate: function() {
                return this.date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
            }
        };
    }
};

// Function to create blog post HTML element
function createBlogPostElement(post) {
    const article = document.createElement('article');
    article.className = 'blog-post';
    
    article.innerHTML = `
        <img src="${post.imageUrl}" alt="${post.title}">
        <div class="blog-post-content">
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <small>${post.formatDate()}</small>
        </div>
    `;
    
    return article;
}

// Function to render blog posts
function renderBlogPosts(posts) {
    const blogGrid = document.querySelector('.blog-grid');
    
    if (posts.length === 0) {
        return; // Keep empty state
    }
    
    // Clear empty state
    blogGrid.innerHTML = '';
    
    // Add posts
    posts.forEach(post => {
        const postElement = createBlogPostElement(post);
        blogGrid.appendChild(postElement);
    });
}

// Example usage (commented out)
/*
const samplePosts = [
    BlogPost.create(
        "Getting Started with Web Development",
        "A beginner's guide to modern web development practices and tools.",
        "/images/web-dev.jpg",
        "2025-02-09"
    ),
    BlogPost.create(
        "The Future of AI",
        "Exploring the latest trends and developments in artificial intelligence.",
        "/images/ai-future.jpg",
        "2025-02-08"
    )
];

// Render posts
renderBlogPosts(samplePosts);
*/

// Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
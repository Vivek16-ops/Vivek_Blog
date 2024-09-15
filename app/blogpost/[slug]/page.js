import React from 'react'

export default function BlogPostSlug({ params }) {
    const blog = {
        title: 'Sample Blog Post',
        author: 'John Doe',
        image: '/first.jpg',
        description: 'This is a sample blog post description.',
        date: '2024-09-15',
        content: `<p>This is the <strong>HTML content</strong> of the blog post. It may contain <em>rich text</em>, images, or other HTML elements.</p>`,
    };

    return (
        <>
            <div className="max-w-5xl mx-auto p-6">
                <h1>{params.slug}</h1>
                <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-auto mb-6 rounded-lg object-cover"
                />
                <p className="text-gray-500 mb-2">By {blog.author} on {new Date(blog.date).toLocaleDateString('en-GB')}</p>
                <p className="text-lg text-gray-700 mb-6">{blog.description}</p>
                {/* Render the HTML content */}
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            </div>
        </>
    );
}
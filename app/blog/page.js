import React from 'react'

const blog_page = () => {
    const blogs = [
        {
            title: 'First Blog Post',
            description: 'This is a brief description of the first blog post.',
            slug: 'first-blog-post',
            date: '2024-09-15',
            author: 'John Doe',
            image: '/images/first.jpg',
        },
        {
            title: 'Second Blog Post',
            description: 'This is a brief description of the second blog post.',
            slug: 'second-blog-post',
            date: '2024-09-14',
            author: 'Jane Smith',
            image: '/images/second.jpg',
        },
    ];
    return (
        <div className="bg-gray-100 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Our Blogs</h2>
                    <p className="text-gray-600 dark:text-gray-400">Read our latest articles</p>
                </div>
                <div className="flex flex-wrap justify-center items-stretch space-x-4">
                    {blogs.map((blog, index) => (
                        <div key={index} className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-48 rounded-lg object-cover"
                            />
                            <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">{blog.title}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-400">{blog.description}</p>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">By {blog.author} on {new Date(blog.date).toLocaleDateString()}</p>
                            <a href={`/blog/${blog.slug}`} className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline">Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default blog_page

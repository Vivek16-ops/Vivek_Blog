'use client'
import React from 'react'
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'

const blog_page = () => {
    const blogs = [
        {
            title: 'First Blog Post',
            description: 'This is a brief description of the first blog post.',
            slug: 'first-blog-post',
            date: '2024-09-15',
            author: 'John Doe',
            image: '/first.jpg',
        },
        {
            title: 'Second Blog Post',
            description: 'This is a brief description of the second blog post.',
            slug: 'second-blog-post',
            date: '2024-09-14',
            author: 'Jane Smith',
            image: '/second.jpg',
        },
        {
            title: 'Third Blog Post',
            description: 'This is a brief description of the second blog post.',
            slug: 'third-blog-post',
            date: '2024-09-14',
            author: 'Vivek Raj',
            image: '/third.jpg',
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
                        <div
                            key={index}
                            className="w-full max-w-sm mx-4 my-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-105"
                        >
                            <div>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-48 rounded-lg object-cover"
                                />
                                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                                    {blog.title}
                                </h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">{blog.description}</p>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">
                                    By {blog.author} on{' '}
                                    {new Date(blog.date).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                    })}
                                </p>
                            </div>
                            {/* Button placed at the bottom */}
                            <Link href={`/blogpost/${blog.slug}`}className={`${buttonVariants({ variant: "outline" })} mt-4 w-fit cursor-pointer`}>Click here</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default blog_page

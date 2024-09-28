'use client'
import React, { useEffect, useState } from 'react'
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'
import Loaderskeleton from '@/components/loadingSkeleton/Loaderskeleton'

const blog_page = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetching all blog data from the Database 
    const fetchData = (async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/backend/getblogAPI`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const result = await response.json();
            setBlogs(result.all_blogs);
        } catch (error) {
            console.error(error.message);
        }finally{
            setLoading(false);
        }
    })

    useEffect(() => {
        setLoading(true);
        fetchData()
    }, [])
    return (
        <div className="bg-gray-100 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Our Blogs</h2>
                    <p className="text-gray-600 dark:text-gray-400">Read our latest articles</p>
                </div>
                {!loading && <div className="flex flex-wrap justify-center items-stretch space-x-4">
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
                            <Link href={`/blogpost/${blog.slug}`} className={`${buttonVariants({ variant: "outline" })} mt-4 w-fit cursor-pointer`}>Click here</Link>
                        </div>
                    ))}
                </div>}
                {loading && <div className="flex flex-wrap justify-center items-stretch space-x-4">
                    <div>
                        <Loaderskeleton />
                        <Loaderskeleton />
                        <Loaderskeleton />
                    </div>
                    <div>
                        <Loaderskeleton />
                        <Loaderskeleton />
                        <Loaderskeleton />
                    </div>
                    <div>
                        <Loaderskeleton />
                        <Loaderskeleton />
                        <Loaderskeleton />
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default blog_page

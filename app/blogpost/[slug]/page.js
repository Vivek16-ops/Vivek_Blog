'use client'
import React, { useEffect, useState } from 'react'
import { Skeleton } from "@/components/ui/skeleton"


export default function BlogPostSlug({ params }) {
    const [blog, setblog] = useState({})
    const [loading, setLoading] = useState(true)

    const fetchBlogPostData = (async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/backend/getSlugBlog`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ slug: params.slug })
            });

            const result = await response.json();
            setblog(result.target_blog)
        } catch (error) {
            console.log(error.message)
        }finally{
            setLoading(false)
        }
    })

    useEffect(() => {
        setLoading(true)
        fetchBlogPostData();
    }, [])

    return (
        <>
            {!loading && <div className="max-w-5xl mx-auto p-6">
                <h1>{params.slug}</h1>
                <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-auto mb-6 rounded-lg object-cover"
                />
                <p className="text-gray-500 mb-2">By {blog.author} on {new Date(blog.date).toLocaleDateString('en-GB')}</p>
                <blockquote className="text-lg text-gray-700 mb-6 border-l-4 border-gray-300 pl-4">
                    &quot;{blog.description}&quot;
                </blockquote>
                {/* Render the HTML content */}
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            </div>}
            {loading && <div className="max-w-5xl py-5 mx-auto rounded-full h-screen space-y-3">
                <Skeleton className="w-full h-[50%]" />
                <Skeleton className="w-[60%] h-[4%]" />
                <Skeleton className="w-[80%] h-[3%]" />
                <Skeleton className="w-[60%] h-[4%]" />
                <Skeleton className="w-[90%] h-[5%]" />
                <Skeleton className="w-[80%] h-[3%]" />
                <Skeleton className="w-[80%] h-[3%]" />
                <Skeleton className="w-[80%] h-[3%]" />
            </div>}
        </>
    );
}
'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-2xl font-bold">
                        <Link href="/">VivekBlog</Link>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <Link href="/" className="text-white">Home</Link>
                        <Link href="/about" className="text-white">About</Link>
                        <Link href="/contact" className="text-white">Contact</Link>
                    </div>
                    <div className="md:hidden text-white" onClick={toggleMenu}>
                        ☰
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden flex flex-col space-y-2 mt-2">
                        <Link href="/" className="text-white">Home</Link>
                        <Link href="/about" className="text-white">About</Link>
                        <Link href="/contact" className="text-white">Contact</Link>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar

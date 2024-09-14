'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from './Theme-btn'

const Navbar = () => {
    return (
        <nav className="p-4 bg-background/50 flex sticky top-0 backdrop-blur border-b">
            <div className="container mx-auto flex justify-between pb-1 items-center pl-2">
                <div className="text-2xl font-bold">
                    <Link href="/">VivekBlog</Link>
                </div>
                <div className="hidden md:flex space-x-4 md:items-center">
                    <Link href="/" className="hover:font-bold transition-all ease-in-out transform hover:scale-100 duration-300">Home</Link>
                    <Link href="/about" className="hover:font-bold transition-all ease-in-out transform hover:scale-100 duration-300">About</Link>
                    <Link href="/blog" className="hover:font-bold transition-all ease-in-out transform hover:scale-100 duration-300">Blog</Link>
                    <Link href="/contact" className="hover:font-bold transition-all ease-in-out transform hover:scale-100 duration-300">Contact</Link>
                    <div>
                        <Button className="mx-2" variant="outline">Login</Button>
                        <Button variant="outline">signup</Button>
                    </div>
                    <ModeToggle />
                </div>
            </div>
            <div className='md:hidden flex space-x-2 justify-center items-center'>
                <ModeToggle />
                <Sheet>
                    <SheetTrigger><div className="md:hidden">
                        ☰
                    </div></SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle><Link href="/">VivekBlog</Link></SheetTitle>
                            <SheetDescription className="font-bold">
                                <div className="md:hidden flex flex-col space-y-2 mt-2">
                                    <Link href="/" className="text-l">Home</Link>
                                    <Link href="/about" className="text-l">About</Link>
                                    <Link href="/blog" className="text-l">Blog</Link>
                                    <Link href="/contact" className="text-l">Contact</Link>
                                    <div className='flex space-x-2 items-center justify-center'>
                                        <Button className='w-fit text-xs' variant="outline">Login</Button>
                                        <Button className='w-fit text-xs' variant="outline">signup</Button>
                                    </div>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}

export default Navbar

import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-200 dark:bg-gray-800 py-12">
            <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
                {/* Logo */}
                <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    VivekBlog
                </div>
                {/* Links */}
                <div className="w-full md:w-auto flex flex-wrap justify-between items-center text-gray-600 dark:text-gray-400 mt-4 md:mt-0">
                    <div className="flex flex-col md:flex-row md:space-x-8">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-gray-800 dark:text-gray-200 font-semibold">About Us</h3>
                            <ul>
                                <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200">Contact Us</a></li>
                                <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200">About Us</a></li>
                                <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200">Careers</a></li>
                                <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200">Press</a></li>
                            </ul>
                        </div>
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-gray-800 dark:text-gray-200 font-semibold">Help</h3>
                            <ul>
                                <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200">Payments</a></li>
                                <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200">Shipping</a></li>
                                <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200">Cancellation & Returns</a></li>
                                <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-gray-800 dark:text-gray-200 font-semibold">Policy</h3>
                            <ul>
                                <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200">Return Policy</a></li>
                                <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200">Terms Of Use</a></li>
                                <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200">Security</a></li>
                                <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200">Privacy</a></li>
                            </ul>
                        </div>
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-gray-800 dark:text-gray-200 font-semibold">Social</h3>
                            <ul>
                                <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200">Facebook</a></li>
                                <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200">Twitter</a></li>
                                <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200">Instagram</a></li>
                                <li><a href="#" className="hover:text-gray-800 dark:hover:text-gray-200">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-8 flex justify-between items-center text-gray-600 dark:text-gray-400">
                <p>&copy; 2024 VivekBlog. All rights reserved.</p>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-800 dark:hover:text-gray-200">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.36 6.64a9 9 0 11-12.72 0 9 9 0 0112.72 0zM12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V12h-2v4.93a8 8 0 01-4.93-4.93H12V8h-4.93A8 8 0 0112 3.07V8h2V3.07a8 8 0 014.93 4.93H12v4.93h4.93A8 8 0 0113 16.93z" />
                        </svg>
                    </a>
                    <a href="#" className="hover:text-gray-800 dark:hover:text-gray-200">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.06 8.19 8.94v-6.34h-2.46v-2.6h2.46v-1.98c0-2.43 1.46-3.76 3.66-3.76 1.06 0 1.97.08 2.24.11v2.6h-1.54c-1.21 0-1.45.58-1.45 1.42v1.86h2.9l-.38 2.6h-2.52v6.34c4.59-.88 8.19-4.53 8.19-8.94 0-5.5-4.46-9.96-9.96-9.96z" />
                        </svg>
                    </a>
                    <a href="#" className="hover:text-gray-800 dark:hover:text-gray-200">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.06 8.19 8.94v-6.34h-2.46v-2.6h2.46v-1.98c0-2.43 1.46-3.76 3.66-3.76 1.06 0 1.97.08 2.24.11v2.6h-1.54c-1.21 0-1.45.58-1.45 1.42v1.86h2.9l-.38 2.6h-2.52v6.34c4.59-.88 8.19-4.53 8.19-8.94 0-5.5-4.46-9.96-9.96-9.96z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer

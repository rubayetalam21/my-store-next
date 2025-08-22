"use client";

import Link from "next/link";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

export default function ClientRootLayout({ children }) {
    return (
        <SessionProvider>
            <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">

                {/* Navbar */}
                <header className="bg-white shadow-sm border-b border-gray-200">
                    <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-8">
                        <Link
                            href="/"
                            className="text-3xl font-serif text-teal-700 hover:text-teal-800 transition"
                        >
                            My Store
                        </Link>

                        <div className="flex gap-6 text-gray-700 font-medium text-lg">
                            <Link href="/products" className="hover:text-teal-700 transition">
                                Products
                            </Link>
                            <Link href="/products/add" className="hover:text-teal-700 transition">
                                Add Product
                            </Link>
                            <Link href="/login" className="hover:text-teal-700 transition">
                                Login
                            </Link>
                        </div>
                    </nav>
                </header>

                {/* Main Content */}
                <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
                    {children}
                </main>

                {/* Footer */}
                <footer className="bg-white border-t border-gray-200">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-6 px-6 md:px-8">
                        <div className="text-gray-600 text-sm md:text-base mb-4 md:mb-0">
                            © 2025 My Store. All rights reserved.
                        </div>
                        <div className="flex gap-6 text-gray-500 text-sm md:text-base">
                            <Link href="#" className="hover:text-teal-700 transition">Privacy Policy</Link>
                            <Link href="#" className="hover:text-teal-700 transition">Terms of Service</Link>
                            <Link href="#" className="hover:text-teal-700 transition">Contact Us</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </SessionProvider>
    );
}

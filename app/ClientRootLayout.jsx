"use client";

import Link from "next/link";
import { SessionProvider, useSession, signOut } from "next-auth/react";
import "./globals.css";

function Navbar() {
    const { data: session } = useSession();

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-8">
                {/* Brand */}
                <Link
                    href="/"
                    className="text-3xl font-serif font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent hover:opacity-90 transition"
                >
                    My Store
                </Link>

                {/* Links */}
                <div className="flex items-center gap-6 text-gray-700 font-medium text-lg">
                    <Link href="/products" className="hover:text-teal-600 transition">
                        Products
                    </Link>
                    <Link href="/products/add" className="hover:text-teal-600 transition">
                        Add Product
                    </Link>

                    {/* Auth Section */}
                    {session ? (
                        <div className="flex items-center gap-4">
                            {/* Avatar + Username */}
                            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
                                <img
                                    src={session.user.image || "/placeholder.png"}
                                    alt={session.user.name}
                                    className="w-8 h-8 rounded-full border border-gray-300"
                                />
                                <span className="font-semibold text-gray-700 hidden sm:block">
                                    {session.user.name}
                                </span>
                            </div>

                            {/* Logout Button */}
                            <button
                                onClick={() => signOut()}
                                className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1.5 rounded-full font-medium shadow hover:opacity-90 transition-all"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-5 py-1.5 rounded-full font-medium shadow hover:opacity-90 transition-all"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default function ClientRootLayout({ children }) {
    return (
        <SessionProvider>
            <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
                <Navbar />

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
                            <Link href="#" className="hover:text-teal-700 transition">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="hover:text-teal-700 transition">
                                Terms of Service
                            </Link>
                            <Link href="#" className="hover:text-teal-700 transition">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </footer>
            </div>
        </SessionProvider>
    );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

const navLinks = [
    { name: "Overview", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Our Difference", href: "/our-difference" },
    { name: "Insights", href: "/insights" },
    { name: "Engagement Model", href: "/engagement-model" },
    { name: "Success Stories", href: "/success-stories" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-navy-900/80 backdrop-blur-md shadow-lg py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-white tracking-tight">
                    v<span className="text-teal-400">CRO</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-teal-400 ${pathname === link.href ? "text-teal-400" : "text-slate-300"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button href="/contact" variant="outline" className="px-4 py-2 text-sm">
                        Contact Us
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-300 hover:text-teal-400"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-navy-800 shadow-xl md:hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-lg font-medium transition-colors hover:text-teal-400 ${pathname === link.href ? "text-teal-400" : "text-slate-300"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button href="/contact" variant="outline" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                                Contact Us
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

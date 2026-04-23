"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Lightbulb, Briefcase, Mail, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./theme-toggle";

const NAV_ITEMS = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Lightbulb },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
];

export const Sidebar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <>
            {/* Mobile Menu Button */}
            <div className="fixed top-4 right-4 z-50 md:hidden">
                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                    className="p-2 rounded-lg glass shadow-lg hover:glass-lg transition-all"
                    aria-label="Toggle menu"
                    aria-expanded={mobileMenuOpen}
                >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Desktop Sidebar - Glassmorphic */}
            <motion.aside
                className={cn(
                    "hidden md:flex flex-col items-center justify-between fixed left-0 top-0 z-40 h-screen py-8 transition-all duration-300",
                    isCollapsed ? "w-20" : "w-64",
                    "glass border-r border-border/50"
                )}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {/* Top Section */}
                <div className="flex flex-col items-center gap-8 w-full">
                    {/* Logo/Title */}
                    <motion.div 
                        className="font-display font-bold text-xl flex items-center justify-between w-full px-6"
                        layout
                    >
                        {!isCollapsed && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                            >
                                SP
                            </motion.span>
                        )}
                        {isCollapsed && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                            >
                                SP
                            </motion.span>
                        )}
                    </motion.div>

                    {/* Navigation Items */}
                    <nav className="flex flex-col gap-2 w-full px-3">
                        {NAV_ITEMS.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "p-3 rounded-lg transition-all duration-200 group flex items-center gap-4",
                                        "hover:glass-primary hover:text-primary",
                                        "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                                        isCollapsed ? "justify-center" : "justify-start",
                                        "relative"
                                    )}
                                >
                                    <item.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    {!isCollapsed && (
                                        <motion.span
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: "auto" }}
                                            exit={{ opacity: 0, width: 0 }}
                                            className="text-sm font-medium text-muted-foreground group-hover:text-foreground"
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                    {isCollapsed && (
                                        <span className="absolute left-16 glass text-foreground px-3 py-1.5 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg">
                                            {item.name}
                                        </span>
                                    )}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>
                </div>

                {/* Bottom Section */}
                <div className="mb-4 flex flex-col items-center gap-4 w-full px-3">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ModeToggle />
                    </motion.div>
                    <motion.button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-2 rounded-lg hover:glass-primary text-muted-foreground hover:text-primary transition-all w-full flex items-center justify-center focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
                    </motion.button>
                </div>
            </motion.aside>

            {/* Mobile Menu Overlay - Glassmorphic */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-background/85 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <nav className="flex flex-col items-center gap-6">
                            {NAV_ITEMS.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link 
                                        href={item.href} 
                                        onClick={() => setMobileMenuOpen(false)} 
                                        className="text-lg font-medium flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg px-4 py-2"
                                    >
                                        <item.icon className="h-6 w-6" /> {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: NAV_ITEMS.length * 0.05 }}
                        >
                            <ModeToggle />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Lightbulb, Briefcase, GraduationCap, Mail, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./theme-toggle";

const NAV_ITEMS = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Lightbulb },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Research", href: "#research", icon: GraduationCap },
    { name: "Contact", href: "#contact", icon: Mail },
];

export const Sidebar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <>
            {/* Mobile Menu Button */}
            <div className="fixed top-4 right-4 z-50 md:hidden">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 bg-background border rounded-lg">
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Desktop Sidebar */}
            <motion.div
                className={cn(
                    "hidden md:flex flex-col items-center justify-between bg-background py-8 fixed left-0 top-0 z-40 h-screen transition-all duration-300",
                    isCollapsed ? "w-20" : "w-64"
                )}
                initial={{ x: -100 }}
                animate={{ x: 0 }}
            >
                {/* Top Section */}
                <div className="flex flex-col items-center gap-8 w-full">
                    <div className="font-bold text-xl flex items-center justify-between w-full px-6">
                        {!isCollapsed && <span>Sashwat Puri</span>}
                        {isCollapsed && <span>SP</span>}
                    </div>

                    <div className="flex flex-col gap-2 w-full px-3">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "p-3 rounded-lg hover:bg-accent transition-colors group flex items-center gap-4",
                                    isCollapsed ? "justify-center" : "justify-start"
                                )}
                            >
                                <item.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                {!isCollapsed && (
                                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                                        {item.name}
                                    </span>
                                )}
                                {isCollapsed && (
                                    <span className="absolute left-16 bg-popover text-popover-foreground px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 border shadow-sm">
                                        {item.name}
                                    </span>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mb-4 flex flex-col items-center gap-4 w-full px-3">
                    <ModeToggle />
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-2 rounded-lg hover:bg-accent text-muted-foreground transition-colors w-full flex items-center justify-center"
                    >
                        {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 md:hidden"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        {NAV_ITEMS.map((item) => (
                            <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-medium flex items-center gap-2">
                                <item.icon className="h-6 w-6" /> {item.name}
                            </Link>
                        ))}
                        <ModeToggle />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

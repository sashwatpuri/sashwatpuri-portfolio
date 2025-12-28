"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Sidebar } from "@/components/ui/sidebar";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Code, Database, Brain, Rocket, Terminal, Layers, Mic, Leaf, LineChart, Activity, Github, Linkedin, GraduationCap, Briefcase, Mail } from "lucide-react";

export default function Home() {
    return (
        <div className="flex bg-background text-foreground min-h-screen font-sans">
            <Sidebar />
            <main className="flex-1 md:ml-20 overflow-x-hidden">

                {/* HERO SECTION */}
                <section id="home" className="flex flex-col overflow-hidden pt-20">
                    <ContainerScroll
                        titleComponent={
                            <div className="flex flex-col items-center gap-6">
                                <span className="font-mono text-primary animate-pulse tracking-wider text-sm md:text-base border border-primary/30 px-4 py-1.5 rounded-full bg-primary/10">
                                    &lt;Hello World /&gt;
                                </span>

                                <h1 className="text-3xl md:text-6xl lg:text-[5.5rem] font-bold text-black dark:text-white leading-none whitespace-nowrap">
                                    I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 animate-gradient">Sashwat Puri Sachdev</span>
                                </h1>

                                <p className="text-sm md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                    Computer Science Undergraduate at <span className="text-primary font-semibold">NIIT University</span>. Building intelligent systems at the intersection of <span className="text-foreground font-medium">AI/ML</span>, <span className="text-foreground font-medium">Research</span>, and <span className="text-foreground font-medium">Full-Stack Engineering</span>.
                                </p>

                                <div className="flex gap-4 mt-4">
                                    <a href="https://github.com/sashwatpuri" target="_blank" className="p-3 rounded-xl bg-secondary/50 hover:bg-secondary hover:text-primary transition-all border border-transparent hover:border-primary/20">
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/sashwat-puri-sachdev-077038211" target="_blank" className="p-3 rounded-xl bg-secondary/50 hover:bg-secondary hover:text-primary transition-all border border-transparent hover:border-primary/20">
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                    <a href="/resume.pdf" target="_blank" className="p-3 rounded-xl bg-secondary/50 hover:bg-secondary hover:text-primary transition-all border border-transparent hover:border-primary/20">
                                        <Terminal className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        }
                    >
                        <Image
                            src={`https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop`}
                            alt="hero"
                            height={720}
                            width={1400}
                            className="mx-auto rounded-2xl object-cover h-full object-left-top draggable-false"
                            draggable={false}
                        />
                    </ContainerScroll>
                </section>

                {/* ABOUT SECTION (REDESIGNED) */}
                <section id="about" className="py-20 px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">

                        {/* LEFT COLUMN: INTRO & STATS */}
                        <div className="space-y-10">
                            <div>

                                <h2 className="text-4xl md:text-6xl font-bold mb-8">About <span className="text-primary">Me</span></h2>

                                <div className="flex items-center gap-4 text-muted-foreground mb-8">
                                    <span className="flex items-center gap-2"><GraduationCap className="w-5 h-5 text-primary" /> NIIT University</span>
                                    <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary/50"></div> India</span>
                                </div>

                                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                    <p>
                                        I&apos;m <span className="text-foreground font-semibold">Sashwat Puri Sachdev</span>, a Computer Science undergraduate at NIIT University, driven by curiosity for how technology can solve real-world problems.
                                    </p>
                                    <p>
                                        My journey into tech began in 2024, when I started with the fundamentals of computer programming in Python and explored IoT-based projects that connected software with the physical world. This foundation helped me understand not just how to write code, but how systems behave in real environments.
                                    </p>
                                    <p>
                                        In my next phase, I strengthened my problem-solving mindset through <span className="text-foreground font-medium">Data Structures and Algorithms</span>, which shaped the way I think about efficiency, scalability, and clean design. As my interest grew, I naturally moved toward <span className="text-foreground font-medium">Machine Learning</span>, where I started building practical models and experimenting with data-driven decision making.
                                    </p>
                                    <p>
                                        Today, I focus on <span className="text-foreground font-semibold">AI and IoT-integrated applications</span>, working on projects like water quality prediction, smart farming systems, and computer vision models. What defines my approach is learning by building — turning concepts into working systems.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mt-8">
                                <div className="p-4 rounded-xl bg-secondary/20 border border-primary/10 flex flex-col items-center justify-center text-center">
                                    <span className="text-3xl font-bold text-primary mb-1">10+</span>
                                    <span className="text-xs text-muted-foreground">Projects</span>
                                </div>
                                <div className="p-4 rounded-xl bg-secondary/20 border border-primary/10 flex flex-col items-center justify-center text-center">
                                    <span className="text-3xl font-bold text-primary mb-1">5+</span>
                                    <span className="text-xs text-muted-foreground">Technologies</span>
                                </div>
                                <div className="p-4 rounded-xl bg-secondary/20 border border-primary/10 flex flex-col items-center justify-center text-center">
                                    <span className="text-3xl font-bold text-primary mb-1">∞</span>
                                    <span className="text-xs text-muted-foreground">Curiosity</span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: JOURNEY TIMELINE */}
                        <div>
                            <h3 className="text-2xl font-bold mb-12 flex items-center gap-3">
                                <Briefcase className="w-6 h-6 text-primary" /> Academic Journey
                            </h3>

                            <div className="border-l border-primary/20 ml-3 space-y-12 relative">

                                {/* Current */}
                                <div className="relative pl-8 group">
                                    <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background group-hover:ring-primary/20 transition-all"></span>
                                    <span className="text-sm font-mono text-primary mb-2 block">Current Focus</span>
                                    <h4 className="text-xl font-bold mb-2">AI + IoT Integrated Systems</h4>
                                    <p className="text-muted-foreground">
                                        Building intelligent physical systems like Smart Farming and Water Quality monitors that leverage data-driven decision making.
                                    </p>
                                </div>

                                {/* Machine Learning */}
                                <div className="relative pl-8 group">
                                    <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background group-hover:ring-primary/20 transition-all"></span>
                                    <span className="text-sm font-mono text-primary mb-2 block">Phase 3</span>
                                    <h4 className="text-xl font-bold mb-2">Machine Learning Exploration</h4>
                                    <p className="text-muted-foreground">
                                        Explored Scikit-learn and foundational ML concepts, building practical models and understanding data pipelines.
                                    </p>
                                </div>

                                {/* DSA */}
                                <div className="relative pl-8 group">
                                    <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background group-hover:ring-primary/20 transition-all"></span>
                                    <span className="text-sm font-mono text-primary mb-2 block">Phase 2</span>
                                    <h4 className="text-xl font-bold mb-2">Data Structures & Algorithms</h4>
                                    <p className="text-muted-foreground">
                                        Strengthened problem-solving mindset, focusing on algorithm efficiency, scalability, and writing clean, optimized code.
                                    </p>
                                </div>

                                {/* Foundations */}
                                <div className="relative pl-8 group">
                                    <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background group-hover:ring-primary/20 transition-all"></span>
                                    <span className="text-sm font-mono text-primary mb-2 block">2024 (Start)</span>
                                    <h4 className="text-xl font-bold mb-2">Foundations: Python & IoT</h4>
                                    <p className="text-muted-foreground">
                                        Started with Python fundamentals and hardware integration, connecting code to the physical world with sensors and actuators.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                {/* PROJECTS SECTION (BENTO GRID) */}
                <section id="projects" className="py-20 px-8 max-w-7xl mx-auto bg-grid-black/[0.1] dark:bg-grid-white/[0.1]">
                    <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">Featured <span className="text-primary">Projects</span></h2>
                    <BentoGrid className="max-w-4xl mx-auto">
                        {projects.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                icon={item.icon}
                                className={i === 0 || i === 3 ? "md:col-span-2" : ""}
                            />
                        ))}
                    </BentoGrid>
                    <div className="flex justify-center mt-10">
                        <a href="https://github.com/sashwatpuri" target="_blank" className="text-primary hover:underline font-semibold flex items-center gap-2">
                            View All Projects on GitHub <Rocket className="w-4 h-4" />
                        </a>
                    </div>
                </section>

                {/* SKILLS SECTION */}
                <section id="skills" className="py-20 px-8 max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-10">Technical <span className="text-primary">Arsenal</span></h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-primary">Technical Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {technicalSkills.map((skill) => (
                                    <div key={skill} className="px-4 py-2 rounded-lg border bg-secondary/30 hover:bg-secondary/60 transition-colors cursor-default">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-primary">Soft Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {softSkills.map((skill) => (
                                    <div key={skill} className="px-4 py-2 rounded-lg border bg-accent/20 hover:bg-accent/40 transition-colors cursor-default text-accent-foreground">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTACT SECTION */}
                <section id="contact" className="py-20 px-8 max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Let&apos;s <span className="text-primary">Connect</span></h2>
                    <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
                    </p>

                    <div className="flex flex-col items-center gap-4 mb-16">
                        <a
                            href="mailto:sashwatpuri@gmail.com"
                            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/25 flex items-center gap-2"
                        >
                            <Mail className="w-5 h-5" /> Say Hello <Rocket className="w-4 h-4 ml-1 rotate-45" />
                        </a>
                        <span className="text-muted-foreground font-mono text-sm">sashwatpuri@gmail.com</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <a href="https://github.com/sashwatpuri" target="_blank" className="group p-8 rounded-2xl bg-secondary/10 border border-primary/10 hover:border-primary/30 transition-all flex flex-col items-center justify-center gap-4">
                            <div className="p-4 rounded-full bg-background group-hover:scale-110 transition-transform">
                                <Github className="w-6 h-6 text-foreground" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-bold text-lg mb-1">GitHub</h3>
                                <p className="text-sm text-muted-foreground">@sashwatpuri</p>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/sashwat-puri-sachdev-077038211" target="_blank" className="group p-8 rounded-2xl bg-secondary/10 border border-primary/10 hover:border-primary/30 transition-all flex flex-col items-center justify-center gap-4">
                            <div className="p-4 rounded-full bg-background group-hover:scale-110 transition-transform">
                                <Linkedin className="w-6 h-6 text-foreground" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-bold text-lg mb-1">LinkedIn</h3>
                                <p className="text-sm text-muted-foreground">Sashwat Puri Sachdev</p>
                            </div>
                        </a>

                        {/* RESUME CARD - UPDATE HREF BELOW WITH DRIVE LINK */}
                        <a href="/resume.pdf" target="_blank" className="group p-8 rounded-2xl bg-secondary/10 border border-primary/10 hover:border-primary/30 transition-all flex flex-col items-center justify-center gap-4 relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform z-10">
                                <span className="font-bold text-xl">CV</span>
                            </div>
                            <div className="text-center z-10">
                                <h3 className="font-bold text-lg mb-1 text-primary">Resume</h3>
                                <p className="text-sm text-muted-foreground">View Professional CV</p>
                            </div>
                        </a>
                    </div>
                </section>

                <footer className="py-10 text-center text-sm text-muted-foreground border-t mt-20">
                    © {new Date().getFullYear()} Sashwat Puri Sachdev. Crafted with Intent.
                </footer>

            </main>
        </div>
    );
}

const ProjectCardGradient = ({ from, to }: { from: string, to: string }) => (
    <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br ${from} ${to} opacity-60 group-hover:opacity-100 transition-opacity`}></div>
);

const projects = [
    {
        title: "Water Quality Prediction Model",
        description: "ML model predicting water potability using IoT sensor data for real-time analysis.",
        header: <ProjectCardGradient from="from-blue-500" to="to-cyan-400" />,
        icon: <Brain className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Smart Farming Irrigation System",
        description: "Automated irrigation system optimizing water usage based on soil moisture data.",
        header: <ProjectCardGradient from="from-green-500" to="to-emerald-400" />,
        icon: <Leaf className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Buffalo & Cattle Classification",
        description: "Computer Vision model for accurate breed and gender classification of livestock.",
        header: <ProjectCardGradient from="from-amber-500" to="to-orange-400" />,
        icon: <Database className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Livestock Monitoring System",
        description: "Comprehensive tracking system for livestock health and activity monitoring.",
        header: <ProjectCardGradient from="from-purple-500" to="to-pink-400" />,
        icon: <Activity className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Pitch Enabling System",
        description: "An AI assistant to help structure and refine product pitches and ideas.",
        header: <ProjectCardGradient from="from-indigo-500" to="to-violet-400" />,
        icon: <Mic className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Personal Developer Portfolio",
        description: "A high-performance, responsive portfolio website built with Next.js and Tailwind CSS.",
        header: <ProjectCardGradient from="from-zinc-500" to="to-gray-400" />,
        icon: <Code className="h-4 w-4 text-neutral-500" />,
    },
];

const technicalSkills = [
    "Python", "C++ (Basics)", "Scikit-learn", "OpenCV", "IoT Sensors", "Data-Driven Systems", "HTML/CSS", "JavaScript", "TypeScript", "Next.js (Beginner)", "Git"
];

const softSkills = [
    "Problem Solving", "Analytical Thinking", "Team Collaboration", "Communication", "Product Thinking", "Curiosity"
];

"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Sidebar } from "@/components/ui/sidebar";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ProjectShowcaseGrid } from "@/components/ui/project-showcase";
import { Code, Database, Brain, Rocket, Terminal, Layers, Mic, Leaf, LineChart, Activity, Github, Linkedin, GraduationCap, Briefcase, Mail, Waves, Droplets, Zap, Shield, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

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
                                <span className="font-mono text-primary animate-pulse tracking-wider text-sm md:text-base glass glass-primary px-4 py-1.5 rounded-full">
                                    &lt;Hello World /&gt;
                                </span>

                                <h1 className="text-3xl md:text-6xl lg:text-[5.5rem] font-display font-bold leading-none whitespace-nowrap">
                                    I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient">Sashwat Puri Sachdev</span>
                                </h1>

                                <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                    Computer Science Undergraduate at <span className="text-primary font-semibold">NIIT University</span>. Building intelligent systems at the intersection of <span className="text-foreground font-medium">AI/ML</span>, <span className="text-foreground font-medium">Research</span>, and <span className="text-foreground font-medium">Full-Stack Engineering</span>.
                                </p>

                                <div className="flex gap-4 mt-6">
                                    <a 
                                        href="https://github.com/sashwatpuri" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="glass-primary p-3 rounded-lg hover:glass-lg transition-all duration-200 group"
                                        aria-label="GitHub"
                                    >
                                        <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
                                    </a>
                                    <a 
                                        href="https://www.linkedin.com/in/sashwat-puri-sachdev-077038211" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="glass-primary p-3 rounded-lg hover:glass-lg transition-all duration-200 group"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
                                    </a>
                                    <a 
                                        href="/resume.pdf" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="glass-primary p-3 rounded-lg hover:glass-lg transition-all duration-200 group"
                                        aria-label="Resume"
                                    >
                                        <Terminal className="w-6 h-6 group-hover:text-primary transition-colors" />
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
                                <div className="glass glass-lg p-6 rounded-lg flex flex-col items-center justify-center text-center hover:glass-lg transition-all">
                                    <span className="text-3xl font-bold text-primary mb-1">10+</span>
                                    <span className="text-xs text-muted-foreground">Projects</span>
                                </div>
                                <div className="glass glass-lg p-6 rounded-lg flex flex-col items-center justify-center text-center hover:glass-lg transition-all">
                                    <span className="text-3xl font-bold text-primary mb-1">5+</span>
                                    <span className="text-xs text-muted-foreground">Technologies</span>
                                </div>
                                <div className="glass glass-lg p-6 rounded-lg flex flex-col items-center justify-center text-center hover:glass-lg transition-all">
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
                                <div className="relative pl-8 group glass-lg rounded-lg p-4 hover:glass-lg transition-all">
                                    <span className="absolute -left-[5px] top-6 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background group-hover:ring-primary/40 transition-all"></span>
                                    <span className="text-xs font-mono font-semibold text-primary mb-2 block uppercase tracking-wide">Current Focus</span>
                                    <h4 className="text-lg font-bold mb-2 text-foreground">AI + IoT Integrated Systems</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Building intelligent physical systems like Smart Farming and Water Quality monitors that leverage data-driven decision making.
                                    </p>
                                </div>

                                {/* Machine Learning */}
                                <div className="relative pl-8 group glass-lg rounded-lg p-4 hover:glass-lg transition-all">
                                    <span className="absolute -left-[5px] top-6 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background group-hover:ring-primary/40 transition-all"></span>
                                    <span className="text-xs font-mono font-semibold text-primary mb-2 block uppercase tracking-wide">Phase 3</span>
                                    <h4 className="text-lg font-bold mb-2 text-foreground">Machine Learning Exploration</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Explored Scikit-learn and foundational ML concepts, building practical models and understanding data pipelines.
                                    </p>
                                </div>

                                {/* DSA */}
                                <div className="relative pl-8 group glass-lg rounded-lg p-4 hover:glass-lg transition-all">
                                    <span className="absolute -left-[5px] top-6 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background group-hover:ring-primary/40 transition-all"></span>
                                    <span className="text-xs font-mono font-semibold text-primary mb-2 block uppercase tracking-wide">Phase 2</span>
                                    <h4 className="text-lg font-bold mb-2 text-foreground">Data Structures & Algorithms</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Strengthened problem-solving mindset, focusing on algorithm efficiency, scalability, and writing clean, optimized code.
                                    </p>
                                </div>

                                {/* Foundations */}
                                <div className="relative pl-8 group glass-lg rounded-lg p-4 hover:glass-lg transition-all">
                                    <span className="absolute -left-[5px] top-6 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background group-hover:ring-primary/40 transition-all"></span>
                                    <span className="text-xs font-mono font-semibold text-primary mb-2 block uppercase tracking-wide">2024 (Start)</span>
                                    <h4 className="text-lg font-bold mb-2 text-foreground">Foundations: Python & IoT</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Started with Python fundamentals and hardware integration, connecting code to the physical world with sensors and actuators.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                {/* PROJECTS SECTION - PREMIUM SHOWCASE */}
                <section id="projects" className="py-24 px-8 max-w-7xl mx-auto relative">
                    {/* Section header */}
                    <div className="mb-16 md:mb-20 text-center md:text-left">
                        <div className="inline-block px-4 py-1.5 rounded-full glass mb-4">
                            <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider">Selected Work</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
                            Featured <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Projects</span>
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                            Building intelligent systems at the intersection of AI, IoT, and data-driven decision making. Each project showcases practical implementation of cutting-edge technologies.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="mb-12">
                        <ProjectShowcaseGrid projects={projectShowcaseData} />
                    </div>

                    {/* View More CTA */}
                    <div className="flex flex-col items-center gap-6 pt-8 border-t border-white/10 dark:border-white/5">
                        <p className="text-muted-foreground text-sm">Interested in more of my work?</p>
                        <a 
                            href="https://github.com/sashwatpuri" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={cn(
                                "inline-flex items-center gap-2 px-6 py-3 rounded-lg",
                                "bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30",
                                "text-sm font-medium text-primary hover:from-primary/30 hover:to-accent/30",
                                "transition-all duration-300 group"
                            )}
                        >
                            <Github className="w-4 h-4" />
                            Explore All Projects
                            <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                                    <div key={skill} className="glass glass-lg px-4 py-2 rounded-lg hover:glass-lg transition-all cursor-default text-sm">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-accent">Soft Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {softSkills.map((skill) => (
                                    <div key={skill} className="glass glass-lg px-4 py-2 rounded-lg hover:glass-lg transition-all cursor-default text-sm bg-accent/10">
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
                            className="glass-primary px-8 py-3 rounded-lg font-bold hover:glass-lg transition-all shadow-lg active:scale-95 flex items-center gap-2"
                        >
                            <Mail className="w-5 h-5" /> Say Hello <Rocket className="w-4 h-4 ml-1 rotate-45" />
                        </a>
                        <span className="text-muted-foreground font-mono text-sm">sashwatpuri@gmail.com</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <a 
                            href="https://github.com/sashwatpuri" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group glass-lg p-8 rounded-xl hover:glass-lg transition-all flex flex-col items-center justify-center gap-4"
                        >
                            <div className="p-4 rounded-full glass-primary group-hover:scale-110 transition-transform">
                                <Github className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-bold text-lg mb-1">GitHub</h3>
                                <p className="text-sm text-muted-foreground">@sashwatpuri</p>
                            </div>
                        </a>

                        <a 
                            href="https://www.linkedin.com/in/sashwat-puri-sachdev-077038211" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group glass-lg p-8 rounded-xl hover:glass-lg transition-all flex flex-col items-center justify-center gap-4"
                        >
                            <div className="p-4 rounded-full glass-primary group-hover:scale-110 transition-transform">
                                <Linkedin className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-center">
                                <h3 className="font-bold text-lg mb-1">LinkedIn</h3>
                                <p className="text-sm text-muted-foreground">Sashwat Puri Sachdev</p>
                            </div>
                        </a>

                        {/* RESUME CARD - UPDATE HREF BELOW WITH DRIVE LINK */}
                        <a 
                            href="/resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group glass-lg p-8 rounded-xl hover:glass-lg transition-all flex flex-col items-center justify-center gap-4 relative overflow-hidden"
                        >
                            <div className="p-4 rounded-full glass-primary text-primary group-hover:scale-110 transition-transform z-10">
                                <span className="font-bold text-xl">CV</span>
                            </div>
                            <div className="text-center z-10">
                                <h3 className="font-bold text-lg mb-1">Resume</h3>
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

const projectShowcaseData = [
    {
        title: "Smart Traffic & Parking Management System",
        description: "Developed an AI-powered smart city solution for Solapur, Maharashtra with comprehensive deployment strategy and revenue model.",
        role: "Full-Stack Developer & AI Engineer",
        impact: "Proposed for city-wide smart traffic infrastructure deployment",
        metrics: [
            { label: "Accuracy", value: "97%+" },
            { label: "Cities", value: "1" },
        ],
        techStack: ["Python", "Computer Vision", "OpenCV", "Scikit-learn", "Flask", "IoT"],
        category: {
            name: "Smart Cities",
            icon: <Shield className="w-4 h-4" />,
            color: "from-amber-500/20 to-orange-500/20",
        },
        details: [
            "AI-powered traffic signal optimization with dynamic green corridors for emergency vehicles",
            "Automated illegal parking & encroachment detection using computer vision",
            "Smart parking management with real-time availability tracking",
            "Full deployment cost analysis and revenue model for sustainable scaling"
        ],
        gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
        github: "https://github.com/sashwatpuri/Smart-traffic-and-parking-management-system",
    },
    {
        title: "Urban Water Intelligence System",
        description: "Full-stack IoT + AI platform for real-time water quality monitoring, predictive leak detection, and intelligent irrigation management.",
        role: "IoT Architecture & ML Engineer",
        impact: "98.2% prediction accuracy for water demand forecasting",
        metrics: [
            { label: "Accuracy", value: "98.2%" },
            { label: "Zones", value: "12+" },
        ],
        techStack: ["ESP32", "Arduino", "Python", "ML", "IoT Sensors", "Data Visualization", "Flask"],
        category: {
            name: "IoT & AI",
            icon: <Zap className="w-4 h-4" />,
            color: "from-blue-500/20 to-cyan-500/20",
        },
        details: [
            "12-zone water quality heatmap with 24-hour parameter trend graphs",
            "ML-based leak detection with 96%+ accuracy using pressure wave analysis",
            "AI demand forecasting with 98.2% accuracy for 7-day predictions",
            "6-zone smart irrigation with soil moisture-based auto-control",
            "Hardware: ESP32 + Arduino with multi-sensor integration",
        ],
        gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
        github: "https://github.com/priyanshu051sharma-blip/Pipeline_Punch",
    },
    {
        title: "Water Quality Prediction & Potability Analysis",
        description: "Advanced machine learning model for multi-parameter water quality classification and comprehensive drinking water potability assessment.",
        role: "Data Scientist & ML Developer",
        impact: "85%+ prediction accuracy with Fuzzy Logic integration",
        metrics: [
            { label: "Accuracy", value: "85%+" },
            { label: "Parameters", value: "10+" },
        ],
        techStack: ["Python", "Scikit-learn", "Fuzzy Logic", "Pandas", "Data Analysis"],
        category: {
            name: "Machine Learning",
            icon: <Brain className="w-4 h-4" />,
            color: "from-emerald-500/20 to-teal-500/20",
        },
        details: [
            "Random Forest classifier with Fuzzy Logic achieving 85%+ prediction accuracy",
            "Comprehensive multi-parameter potability assessment",
            "Data preprocessing and feature engineering for water quality datasets",
        ],
        gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
        github: "https://github.com/sashwatpuri/water-quality-pridiction-modeling",
    },
    {
        title: "PitchForge - AI Pitch Enablement Platform",
        description: "Professional AI-powered pitch simulator with 3D product viewing, speech-to-text recording, and real-time AI feedback. Built for hackathons with a clean SaaS interface.",
        role: "Full-Stack Developer & AI Integration Engineer",
        impact: "Real-time AI evaluation across 5+ pitch criteria",
        metrics: [
            { label: "Evaluation Criteria", value: "5+" },
            { label: "Tech Stack", value: "React + Vite" },
        ],
        techStack: ["React", "Vite", "Tailwind CSS", "Web Speech API", "@google/model-viewer", "React Router"],
        category: {
            name: "SaaS Platform",
            icon: <Sparkles className="w-4 h-4" />,
            color: "from-cyan-500/20 to-blue-500/20",
        },
        details: [
            "AI-powered pitch simulator with real-time feedback on clarity, confidence, persuasion, and storytelling",
            "Interactive 3D product viewer with clickable hotspots for feature exploration",
            "Speech-to-text recording using Web Speech API for pitch capture and analysis",
            "Investor Mode for practicing tough questions with AI evaluation",
        ],
        gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
        github: "https://github.com/sashwatpuri/Pitching-training",
    },
];

const technicalSkills = [
    "Python", "C++ (Basics)", "Scikit-learn", "OpenCV", "IoT Sensors", "Data-Driven Systems", "HTML/CSS", "JavaScript", "TypeScript", "Next.js (Beginner)", "Git"
];

const softSkills = [
    "Problem Solving", "Analytical Thinking", "Team Collaboration", "Communication", "Product Thinking", "Curiosity"
];

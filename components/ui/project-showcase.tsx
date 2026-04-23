"use client";
import React from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectMetric {
    label: string;
    value: string;
}

interface ProjectShowcaseProps {
    title: string;
    description: string;
    role: string;
    impact: string;
    metrics?: ProjectMetric[];
    techStack: string[];
    category: {
        name: string;
        icon: React.ReactNode;
        color: string;
    };
    details: string[];
    gradient: string;
    github?: string;
    featured?: boolean;
    order?: number; // For asymmetric layout
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
    title,
    description,
    role,
    impact,
    metrics,
    techStack,
    category,
    details,
    gradient,
    github,
    featured,
    order,
}) => {
    const isFeatured = featured || order === 0;

    return (
        <div
            className="group relative"
        >
            <div
                className={cn(
                    "relative h-full rounded-2xl overflow-hidden transition-all duration-500",
                    "before:absolute before:inset-0 before:rounded-2xl before:p-px before:bg-gradient-to-br before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-500",
                    gradient,
                    "bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10"
                )}
            >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `linear-gradient(135deg, rgba(190, 95, 100, 0.2), rgba(260, 80, 100, 0.2))`,
                    }}
                />

                {/* Content container */}
                <div className="relative h-full p-6 md:p-8 flex flex-col bg-white/5 dark:bg-white/[0.02] backdrop-blur-2xl">
                    {/* Header: Category & Metrics */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                        {/* Category Badge */}
                        <div className={cn(
                            "inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm border",
                            "bg-gradient-to-r from-white/10 to-white/5 border-white/20",
                            "dark:from-white/5 dark:to-white/[0.02] dark:border-white/10",
                            "group-hover:from-white/20 group-hover:to-white/10 transition-all duration-300"
                        )}>
                            <div className="text-sm">{category.icon}</div>
                            <span className="text-xs font-semibold text-foreground">{category.name}</span>
                        </div>

                        {/* Metrics */}
                        {metrics && metrics.length > 0 && (
                            <div className="flex gap-3 flex-wrap">
                                {metrics.map((metric, idx) => (
                                    <div key={idx} className="text-right">
                                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                                        <div className="text-sm font-bold text-primary">{metric.value}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Title & Description */}
                    <div className="mb-6 flex-1">
                        <h3 className="font-display font-bold mb-2 transition-all duration-300 text-lg md:text-xl">
                            {title}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                            {description}
                        </p>

                        {/* Role & Impact */}
                        <div className="space-y-2 mb-4">
                            <div className="text-xs md:text-sm">
                                <span className="text-muted-foreground">Role: </span>
                                <span className="text-foreground font-medium">{role}</span>
                            </div>
                            <div className="text-xs md:text-sm">
                                <span className="text-muted-foreground">Impact: </span>
                                <span className="text-foreground font-medium">{impact}</span>
                            </div>
                        </div>

                        {/* Details / Bullet Points */}
                        {details && details.length > 0 && (
                            <ul className="space-y-1.5 list-disc list-inside text-muted-foreground text-xs">
                                {details.slice(0, 3).map((detail, idx) => (
                                    <li key={idx} className="leading-relaxed">
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                        <div className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                            Tech Stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {techStack.slice(0, 4).map((tech, idx) => (
                                <div
                                    key={idx}
                                    className={cn(
                                        "px-2.5 py-1 rounded-md text-xs font-medium",
                                        "bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30",
                                        "text-foreground hover:from-primary/30 hover:to-accent/30",
                                        "transition-all duration-300 cursor-default"
                                    )}
                                >
                                    {tech}
                                </div>
                            ))}
                            {techStack.length > 4 && (
                                <div className="px-2.5 py-1 text-xs font-medium text-muted-foreground">
                                    +{techStack.length - 4} more
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex gap-3 pt-4 border-t border-white/10 dark:border-white/5">
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg",
                                    "bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30",
                                    "text-xs font-medium text-primary hover:from-primary/30 hover:to-primary/20",
                                    "transition-all duration-300 group/link"
                                )}
                            >
                                <Github className="w-3.5 h-3.5" />
                                View Code
                                <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                            </a>
                        )}
                        <a
                            href="#contact"
                            className={cn(
                                "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg",
                                "bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30",
                                "text-xs font-medium text-accent hover:from-accent/30 hover:to-accent/20",
                                "transition-all duration-300 group/link"
                            )}
                        >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Learn More
                            <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Animated gradient overlay on hover */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(190, 95, 100, 0.1), transparent 80%)`,
                    }}
                />
            </div>
        </div>
    );
};

export const ProjectShowcaseGrid: React.FC<{ projects: ProjectShowcaseProps[] }> = ({ projects }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 auto-rows-max">
            {projects.map((project, idx) => (
                <ProjectShowcase
                    key={idx}
                    {...project}
                    order={idx}
                    featured={idx === 0}
                />
            ))}
        </div>
    );
};

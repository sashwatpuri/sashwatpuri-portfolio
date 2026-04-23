import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-max grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    year,
    details,
    github,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    year?: string;
    details?: string[];
    github?: string;
}) => {
    return (
        <div
            className={cn(
                "rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col overflow-hidden",
                className
            )}
        >
            {/* Header - Fixed height */}
            <div className="h-32 w-full overflow-hidden flex-shrink-0 rounded-t-lg">
                {header}
            </div>
            
            {/* Content - Properly contained */}
            <div className="flex flex-col flex-1 p-4">
                <div className="space-y-2">
                    {icon}
                    <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200">
                        {title}
                    </div>
                    {year && <span className="text-xs text-primary font-mono font-semibold block">{year}</span>}
                    <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                        {description}
                    </div>
                </div>
                
                {details && details.length > 0 && (
                    <ul className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1 list-disc list-inside mt-3">
                        {details.map((detail, idx) => (
                            <li key={idx} className="leading-tight">{detail}</li>
                        ))}
                    </ul>
                )}
                
                {github && (
                    <a 
                        href={github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline font-semibold mt-auto pt-3 border-t border-neutral-200 dark:border-neutral-700"
                    >
                        View on GitHub →
                    </a>
                )}
            </div>
        </div>
    );
};

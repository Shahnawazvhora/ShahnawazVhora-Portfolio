export interface Project {
    title: string;
    description: string;
    image: string;
    imageHeight?: number;
    techStack: string[];
    demoLink?: string;
    sourceLink?: string;
}

export interface DemoProject {
    title: string;
    description: string;
    techStack: string[];
    sourceLink?: string;
    demoLink?: string;
} 
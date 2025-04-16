"use client"

import React, { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import { ProjectsData } from "../../data/Projects";

type Category = "All" | "Web Development" | "Mobile App" | "UI/UX Design" | "E-commerce";

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category>("All");
    const [filteredProjects, setFilteredProjects] = useState(ProjectsData);

    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredProjects(ProjectsData);
        } else {
            setFilteredProjects(ProjectsData.filter(project => project.category === selectedCategory));
        }
    }, [selectedCategory]);

    const categories: Category[] = ["All", "Web Development", "Mobile App", "UI/UX Design", "E-commerce"];

    return (
        <>
            <section className="bg-gradient-to-b from-secondary/50 to-background dark:from-secondary/20 dark:to-background">
                <div className="container-custom py-16 md:py-24">
                    <h1 className="heading-lg">Our Projects</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                        Explore our portfolio of digital solutions across web, mobile, and design
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category
                                    ? "bg-primary text-white"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container-custom">
                    {filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.id} {...project} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <h3 className="heading-md">No projects found</h3>
                            <p className="mt-2 text-muted-foreground">
                                No projects in the &#34;{selectedCategory}&#34; category at the moment.
                            </p>
                            <button
                                onClick={() => setSelectedCategory("All")}
                                className="mt-6 button-outline"
                            >
                                View All Projects
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Projects;
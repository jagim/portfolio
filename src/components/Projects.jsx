import { useState, useEffect } from "react"
import { projects as listOfProjects } from "../data/projects.json"
import { left_icon, right_icon } from "./Icons"
import ProjectCard from "./ProjectCard"

export default function Projects() {
    const [projects, setProjects] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        setProjects(listOfProjects)
    }, [])

    const handlePreviusProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
    }

    const handleNextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }

    return (
        <section className="mx-4 mt-16">
            <div className="flex items-center justify-center gap-2">
                <img src="/project-icon.svg" alt="project icon" className="w-10" />
                <h2 className="text-5xl font-bold text-center my-10 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent p-2">Projects</h2>
            </div>
            <div className="flex md:flex-row flex-col justify-center items-center gap-10">
                <button
                    type="button"
                    className="py-4 text-emerald-500 hover:scale-125"
                    onClick={handlePreviusProject}
                >{left_icon()}</button>
                <div className="flex justify-center">
                    {projects.length > 0 && (
                        <ProjectCard project={projects[currentIndex]} />
                    )}
                </div>
                <button
                    type="button"
                    className="py-4 text-emerald-500 hover:scale-125"
                    onClick={handleNextProject}
                >{right_icon()}</button>
            </div>
        </section >
    )
}

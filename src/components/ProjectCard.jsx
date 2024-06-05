import { useState } from "react"
import { gitHub_icon, link_icon } from "./Icons"
import { useEffect } from "react"

export default function ProjectCard({ project }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const handlePrevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length)
    }
    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length)
    }

    return (
        <article className="grid lg:grid-cols-2 grid-flow-row gap-5 mx-5 overflow-hidden">
            <div className="my-auto mx-10">
                <div className="flex flex-col gap-5 text-wrap flex-1">
                    <h3 className="text-2xl text-center font-bold">{project.name}</h3>
                    <p className="text-lg font-medium text-slate-300">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-16">
                    {project.techs.map((tech, index) => (
                        <label
                            key={index}
                            className="text-sm text-center font-medium px-2 py-1 border-2 border-emerald-600 rounded-2xl"
                        >{tech}</label>
                    ))}
                </div>
                <div className="flex justify-center my-10 gap-8">
                    <a
                        href={project.github}
                        className="flex gap-2 items-center text-emerald-400 font-semibold px-5 py-2 bg-blue-950 border-2 border-slate-600 rounded-lg hover:scale-125"
                        target="_blank"
                        rel="noopener noreferrer"
                    >{gitHub_icon(28, 28)} Code</a>
                    <a
                        href={project.url}
                        className="flex gap-2 items-center text-emerald-400 font-semibold px-5 py-2 bg-blue-950 border-2 border-slate-600 rounded-lg hover:scale-125"
                        target="_blank"
                        rel="noopener noreferrer"
                    >{link_icon()} Site</a>
                </div>
            </div>
            <div className="mx-auto my-auto w-full">
                <img
                    src={project.images[currentIndex]}
                    alt={project.name}
                    className="h-full w-full object-cover object-top rounded-xl"
                />
                <div className="flex justify-center gap-5 mt-5">
                    <button className="p-2 font-semibold text-orange-400" onClick={handlePrevImage}>Prev</button>
                    <button className="p-2 font-semibold text-orange-400" onClick={handleNextImage}>Next</button>
                </div>
            </div>
        </article>
    )
}
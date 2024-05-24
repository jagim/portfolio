import { gitHub_icon, link_icon } from "./Icons";

export default function ProjectCard({ project }) {
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
                <div className="flex justify-center mt-10 gap-10">
                    <a
                        href={project.github}
                        className="text-emerald-400 px-5 py-1 border-t-2 border-b-2 border-emerald-400 rounded-lg hover:text-emerald-200 hover:border-emerald-200 hover:scale-125"
                        target="_blank"
                        rel="noopener noreferrer"
                    > {gitHub_icon(32, 32)}</a>
                    <a
                        href={project.url}
                        className="text-emerald-400 px-5 py-1 border-t-2 border-b-2 border-emerald-400 rounded-lg hover:text-emerald-200 hover:border-emerald-200 hover:scale-125"
                        target="_blank"
                        rel="noopener noreferrer"
                    >{link_icon()}</a>
                </div>
            </div>

            <div className="my-auto mx-auto w-fit">
                <img src={project.images[0]} alt={project.name} className="h-[18rem] w-full object-cover object-top rounded-xl" />
            </div>


        </article>
    )
}

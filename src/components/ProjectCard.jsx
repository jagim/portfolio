import { gitHub_icon, link_icon } from "./Icons";

export default function ProjectCard({ project }) {
    return (
        <article className="flex flex-col w-[35rem] border-2 border-sky-900 rounded-xl shadow shadow-sky-700 overflow-hidden">
            <div className="flex">
                <img src={project.images[0]} alt={project.name} className="h-[18rem] w-full object-cover object-top rounded-xl" />
            </div>
            <div className="my-4 mx-10 flex-1">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                    {project.techs.map((tech, index) => (
                        <label
                            key={index}
                            className="text-sm text-center font-medium px-2 py-1 border-2 border-emerald-600 rounded-2xl"
                        >{tech}</label>
                    ))}
                </div>
                <div className="flex mt-4 gap-5">
                    <a
                        href={project.github}
                        className="text-emerald-400 hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                    >{gitHub_icon(28, 28)}</a>
                    <a
                        href={project.url}
                        className="text-emerald-400 hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                    >{link_icon()}</a>
                </div>
            </div>
            <button
                type="button"
                className="mt-2 px-3 py-2 text-slate-300 hover:text-orange-400 font-semibold bg-sky-800"
            >Read more...</button>
        </article>
    )
}

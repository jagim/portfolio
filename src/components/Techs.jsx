import { dev_icons } from "../data/dev-icons.json"

export default function Techs() {
    const carousel = [...dev_icons, ...dev_icons]

    return (
        <section className="mt-16 mx-10">
            <h2 className="text-4xl font-bold text-center my-10 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent p-2">Tech Stack</h2>
            <div className="flex flex-wrap overflow-hidden p-8">
                <div className="flex gap-8 w-fit mx-auto animate-scroll">
                    {carousel.map((icon, index) => (
                        <img
                            key={index}
                            src={icon.src}
                            alt={icon.alt}
                            className="w-24 hover:scale-125"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
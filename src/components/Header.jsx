import ButtonsBar from "./ButtonsBar"

export default function Header() {
    return (
        <header className="mt-16 mx-4">

            <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-evenly">
                <div className="flex flex-col p-2 gap-2 mt-10">
                    <p className="text-3xl font-bold">Hi there! <span className="bg-emerald-400 bg-clip-text text-transparent">I'm </span></p>
                    <h1 className="text-5xl font-bold">Javier Giménez</h1>
                    <h2 className="text-6xl font-black bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">Web Developer</h2>
                </div>
                <div className="w-48 h-48 mt-10 rounded-full overflow-hidden border-2 border-emerald-500">
                    <img src="/photo.png" alt="profile photo" className="w-full h-full object-cover m-1" />
                </div>
            </div>

            <ButtonsBar />

            <div className="w-2/3 mx-auto flex flex-col gap-2 mt-16 border-[2px] border-sky-800 shadow shadow-sky-700 p-4 rounded-tl-3xl rounded-br-3xl text-wrap">
                <h2 className="text-xl text-green-400 font-bold">About me:</h2>
                <p className="text-lg font-medium text-slate-300">Proactive web developer passionate about continuous learning. I have proven experience and skills in creative problem solving, highlighting my ability to find quick and effective solutions.</p>
            </div>

        </header>
    )
}

import { useState } from "react"
import { cv_icon, email_icon, gitHub_icon, linkedIn_icon } from "./Icons"

export default function ButtonsBar() {
    const [email] = useState("gimenez.javi.05@gmail.com")

    const handleCopy = () => {
        navigator.clipboard.writeText(email).then(() => {
            alert('¡Correo copiado al portapapeles!')
        }).catch(error => {
            console.log("Error to copy", error)
        })
    }

    return (
        <>
            <div className="w-2/3 mx-auto mt-10 flex gap-6 items-center justify-center sm:justify-start">
                <a
                    className="text-green-400 p-1 hover:scale-110"
                    href="https://www.linkedin.com/in/gimenez-javier"
                    target="_blank"
                    rel="noopener noreferrer"
                >{linkedIn_icon()}</a>
                <a
                    className="text-green-400 p-1 hover:scale-110"
                    href="https://github.com/jagim"
                    target="_blank"
                    rel="noopener noreferrer"
                >{gitHub_icon(40, 40)}</a>
                <div className="group relative inline-block">
                    <button
                        type="button"
                        className=" text-green-400 p-1 hover:scale-110"
                        onClick={handleCopy}
                    >{email_icon()}</button>
                    <span className="tooltip absolute bg-black text-white text-xs rounded p-1 -bottom-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">Copy Email</span>
                </div>
                <div className="group relative inline-block">
                    <button
                        type="button"
                        className=" text-green-400 p-1 hover:scale-110"
                    >{cv_icon()}
                    </button>
                    <span className="tooltip absolute bg-black text-white text-xs rounded p-1 -bottom-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">Download CV</span>
                </div>
            </div>
        </>
    )
}

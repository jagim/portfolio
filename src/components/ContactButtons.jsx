import { Toaster, toast } from 'sonner'
import { useState } from "react"
import { cv_icon, email_icon, gitHub_icon, linkedIn_icon } from "./Icons"

export default function ButtonsBar() {
    const [email] = useState("gimenez.javi.05@gmail.com")

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email).then(() => {
            toast.success("Email Copied to Clipboard")
        }).catch(error => {
            console.log("Error to copy", error)
        })
    }

    const handleDownloadCV = () => {
        fetch('/cv.pdf')
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]))
                const link = document.createElement('a')
                link.href = url
                link.setAttribute('download', 'cv.pdf')
                document.body.appendChild(link)
                link.click()
                link.parentNode.removeChild(link)
                toast.success("CV Downloaded Successfully")
            })
            .catch(error => console.error('Error downloading the file:', error))
    }

    return (
        <>
            <div className="w-2/3 mx-auto flex gap-6 items-center justify-center sm:justify-start">
                <a
                    className="text-green-400 p-1 hover:scale-125"
                    href="https://www.linkedin.com/in/gimenez-javier"
                    target="_blank"
                    rel="noopener noreferrer"
                >{linkedIn_icon()}</a>
                <a
                    className="text-green-400 p-1 hover:scale-125"
                    href="https://github.com/jagim"
                    target="_blank"
                    rel="noopener noreferrer"
                >{gitHub_icon(40, 40)}</a>
                <div className="group relative inline-block">
                    <button
                        type="button"
                        className=" text-green-400 p-1 hover:scale-125"
                        onClick={handleCopyEmail}
                    >{email_icon()}</button>
                    <span className="tooltip absolute bg-black text-white text-xs rounded p-1 -bottom-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">Copy Email</span>
                </div>
                <div className="group relative inline-block">
                    <button
                        type="button"
                        className=" text-green-400 p-1 hover:scale-125"
                        onClick={handleDownloadCV}
                    >{cv_icon()}
                    </button>
                    <span className="tooltip absolute bg-black text-white text-xs rounded p-1 -bottom-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100">Download CV</span>
                </div>
            </div>
            <div>
                <Toaster position="top-right" richColors />
            </div>
        </>
    )
}

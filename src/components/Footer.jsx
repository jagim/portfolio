import ContactButtons from "./ContactButtons"

export default function Footer() {
    return (
        <footer className="flex items-center justify-between mt-16 p-3 border-sky-800 border-t-2">
            <p className="text-lg font-bold">Made by Javier Gimenez <span className="text-orange-400">2024.-</span></p>
            <div className="mr-10">
                <ContactButtons />
            </div>
        </footer>
    )
}

import ContactButtons from "./ContactButtons"

export default function Footer() {
    return (
        <footer className="flex items-center justify-between mt-16 p-3 border-sky-800 border-t-2">
            <div className="flex flex-col">
                <p className="font-bold">Javier Gimenez </p>
                <span className="text-orange-400">2024.</span>
            </div>
            <div className="mr-10">
                <ContactButtons />
            </div>
        </footer>
    )
}

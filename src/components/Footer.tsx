import { Facebook, LaptopMinimal, Twitter, X, Youtube } from "lucide-react"

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center p-10">
            <aside>
                <a href="#" className="flex items-center font-bold text-3xl md:text-xl ">
                    <LaptopMinimal className="h-10 w-10" />
                </a>
                <p className="font-bold">

                    404 <span className="text-accent "> DEV</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} - Tout droitss reservé</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <X className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <Youtube className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-6 h-6 text-current" />
                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;

export default function Footer () {
    return (
        <footer className="w-full border-t bg-background py-6">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <div className="flex items-center">
                    <img
                        src="/logo.png"
                        alt="Salafi Coders Logo"
                        width={60}
                        height={60}
                        className="mr-4 rounded-sm"
                    />
                    <span className="text-lg font-semibold text-foreground">
                        Salafi Coders
                    </span>
                </div>
                <span className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Salafi Coders. All rights reserved.
                </span>
                <nav className="flex gap-4">
                    <a
                        href="/"
                        className="text-sm text-muted-foreground hover:underline"
                    >
                        Home
                    </a>
                    <a
                        href="/projects"
                        className="text-sm text-muted-foreground hover:underline"
                    >
                        Projects
                    </a>
                </nav>
            </div>
        </footer>
    )
}
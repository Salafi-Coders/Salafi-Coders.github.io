export default function Footer () {
    return (
        <footer className="w-full border-t bg-background py-6">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <div className="flex items-center">
                    <img
                        src="https://private-user-images.githubusercontent.com/70416702/457704412-5c687445-0e78-4442-89f2-8e37e08f556f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA4OTUzNjksIm5iZiI6MTc1MDg5NTA2OSwicGF0aCI6Ii83MDQxNjcwMi80NTc3MDQ0MTItNWM2ODc0NDUtMGU3OC00NDQyLTg5ZjItOGUzN2UwOGY1NTZmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjI1VDIzNDQyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNiNzYyNmY4YzFhMTNiZWU0MzRmMjJhZjBmZjlkZTRkZWI2ZDg0MGJiYzZhMzU1M2ExMWUzYzQyMWRmYTY4NmMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.PjUj8t9LniOhKYAyno9lRBMwBPElh4MseLi0K1vzmqQ"
                        alt="Salafi Coders Logo"
                        width={60}
                        height={60}
                        className="mr-4"
                    />
                </div>
                <span className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Salafi Coders. All rights reserved.
                </span>
                <nav className="flex gap-4">
                    <a
                        href="https://github.com/Salafi-Coders"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:underline"
                    >
                        GitHub
                    </a>
                    <a
                        href="/about"
                        className="text-sm text-muted-foreground hover:underline"
                    >
                        About
                    </a>
                    <a
                        href="/contact"
                        className="text-sm text-muted-foreground hover:underline"
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </footer>
    )
}
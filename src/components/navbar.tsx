import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
    return (
        <nav className=" w-full flex items-center justify-between px-6 py-3 bg-background shadow">
            {/* Logo on the left */}
            <div className="flex items-center">
                    <img
                        src="https://private-user-images.githubusercontent.com/70416702/457704412-5c687445-0e78-4442-89f2-8e37e08f556f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA4OTUzNjksIm5iZiI6MTc1MDg5NTA2OSwicGF0aCI6Ii83MDQxNjcwMi80NTc3MDQ0MTItNWM2ODc0NDUtMGU3OC00NDQyLTg5ZjItOGUzN2UwOGY1NTZmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjI1VDIzNDQyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWNiNzYyNmY4YzFhMTNiZWU0MzRmMjJhZjBmZjlkZTRkZWI2ZDg0MGJiYzZhMzU1M2ExMWUzYzQyMWRmYTY4NmMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.PjUj8t9LniOhKYAyno9lRBMwBPElh4MseLi0K1vzmqQ"
                        alt="Salafi Coders Logo"
                        width={60}
                        height={60}
                        className="mr-4"
                    />
            </div>
            {/* Nav items on the right */}
            <NavigationMenu>
                <NavigationMenuList className="flex items-center">
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>Link</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <ModeToggle />
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between px-6 py-3 bg-background shadow">
            {/* Logo on the left */}
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
            {/* Nav items on the right */}
            <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-4">
                    <NavigationMenuItem>
                        <NavigationMenuLink className="px-4 py-2" href="/">
                            Home
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className="px-4 py-2" href="/">
                            Projects
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <ModeToggle />
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}
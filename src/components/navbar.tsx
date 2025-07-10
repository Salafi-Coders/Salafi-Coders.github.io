import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { LanguageToggle } from "./language-toggle";
import { Link } from "react-router-dom";

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
                        <Link className="px-4 py-2" to="/">
                            Home
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className="px-4 py-2" href="/projects">
                            Projects
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <div className="flex items center gap-2">
                        <LanguageToggle />
                        <ModeToggle />
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}
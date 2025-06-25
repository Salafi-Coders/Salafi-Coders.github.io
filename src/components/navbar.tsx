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
                {/* Replace with your logo image or text */}
                <span className="font-bold text-xl text-primary">Logo</span>
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
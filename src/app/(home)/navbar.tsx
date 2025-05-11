import { Poppins } from "next/font/google"
import Link from "next/link"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
})

interface NavbarItemsProps{
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemsProps)=>{
    return(
        <Button>
            {children}
        </Button>
    )
}

const navbarItems = [
    { href: "/", children: "Home" },
    { href: "/about", children: "About" },
    {href: "features", children: "Features"},
    {href: "pricing", children: "Pricing"},
    {href: "contact", children: "Contact"},
]

const Navbar = () => {
  return (
    <nav className='h-20 flex justify-between font-medium border-b bg-white'>
        <Link href="/" className="flex items-center pl-6">
            <span className={cn("text-5xl font-semibold", poppins.className)}>Funroad</span>
        </Link>

        <div className="items-center gap-4 hidden lg:flex">
            {navbarItems.map((item)=>{
                <NavbarItem key={item.href} href={item.href}>
                    {item.children}
                </NavbarItem>
            })}
        </div>
    </nav>
  )
}

export default Navbar
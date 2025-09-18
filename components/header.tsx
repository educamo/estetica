"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="bg-card shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold text-foreground">BELLA</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              HOME
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>SERVICES</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-secondary">
                <DropdownMenuItem asChild>
                  <Link href="/services/depilaciones" className="text-secondary-foreground">
                    DEPILACIONES
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/unas" className="text-secondary-foreground">
                    UÑAS
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/peinados" className="text-secondary-foreground">
                    PEINADOS
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/gallery" className="text-foreground hover:text-primary transition-colors">
              GALLERY
            </Link>
          </nav>

          {/* CTA Button */}
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/appointment">AGENDA TU CITA</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

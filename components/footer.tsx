import Link from "next/link"
import { Twitter, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-secondary-foreground font-bold">B</span>
            </div>
            <span className="text-lg">© 2025 Bella Soins, Inc</span>
          </div>

          <div className="flex space-x-4">
            <Link href="#" className="hover:text-secondary transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-secondary transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-secondary transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-6 pt-6 border-t border-slate-700">
          <p className="text-sm text-slate-400">Design by C. Eduardo Carrasco</p>
        </div>
      </div>
    </footer>
  )
}

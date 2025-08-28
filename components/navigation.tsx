"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { User, BookOpen, BarChart3 } from "lucide-react"

export function Navigation() {
  return (
    <nav className="bg-card border-b border-border soft-shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y título */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Orientación Vocacional" width={40} height={40} className="rounded-full" />
            <div>
              <h1 className="text-lg font-semibold text-foreground">Orientación Vocacional</h1>
              <p className="text-xs text-muted-foreground">Descubre tu futuro profesional</p>
            </div>
          </div>

          {/* Navegación principal */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" asChild className="rounded-xl">
              <Link href="/dashboard" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Dashboard
              </Link>
            </Button>
            <Button variant="ghost" asChild className="rounded-xl">
              <Link href="/examen" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Examen
              </Link>
            </Button>
            <Button variant="ghost" asChild className="rounded-xl">
              <Link href="/resultados" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Resultados
              </Link>
            </Button>
          </div>

          {/* Botones de acción */}
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild className="rounded-xl bg-transparent">
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
            <Button asChild className="rounded-xl bg-primary hover:bg-primary/90">
              <Link href="/registro">Registrarse</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Target, Users, Award, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/logo.png"
                alt="Orientación Vocacional"
                width={120}
                height={120}
                className="rounded-full soft-shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Descubre tu <span className="text-primary">vocación profesional</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Una plataforma integral que te ayuda a identificar tus fortalezas, intereses y la carrera universitaria
              perfecta para tu futuro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="rounded-xl text-lg px-8 py-6 soft-shadow">
                <Link href="/registro" className="flex items-center gap-2">
                  Comenzar Test Vocacional
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-xl text-lg px-8 py-6 soft-shadow bg-transparent"
              >
                <Link href="/login">Ya tengo cuenta</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">¿Cómo te ayudamos?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nuestro sistema integral te guía paso a paso hacia la elección correcta
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="rounded-2xl soft-shadow border-0 bg-card hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Test Personalizado</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Evaluación completa de tus intereses, habilidades y personalidad
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl soft-shadow border-0 bg-card hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Carreras Sugeridas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Recomendaciones precisas basadas en tu perfil vocacional
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl soft-shadow border-0 bg-card hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Universidades</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Información detallada sobre universidades y sedes disponibles
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl soft-shadow border-0 bg-card hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Seguimiento</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Monitorea tu progreso y actualiza tus preferencias
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="rounded-3xl soft-shadow-lg border-0 bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ¿Listo para descubrir tu futuro?
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground mb-8">
                Únete a miles de estudiantes que ya han encontrado su vocación
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" asChild className="rounded-xl text-lg px-12 py-6 soft-shadow">
                <Link href="/registro" className="flex items-center gap-2">
                  Empezar ahora gratis
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Image src="/logo.png" alt="Orientación Vocacional" width={60} height={60} className="rounded-full" />
          </div>
          <p className="text-muted-foreground mb-4">Orientación Vocacional - Descubre tu futuro profesional</p>
          <p className="text-sm text-muted-foreground">© 2024 Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  )
}

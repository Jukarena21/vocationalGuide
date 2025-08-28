import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"
import { Mail, Lock, ArrowRight } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <Card className="rounded-3xl soft-shadow-lg border-0 bg-card">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-6">
                <Image
                  src="/logo.png"
                  alt="Orientación Vocacional"
                  width={80}
                  height={80}
                  className="rounded-full soft-shadow"
                />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Bienvenido de vuelta</CardTitle>
              <CardDescription className="text-muted-foreground">
                Ingresa a tu cuenta para continuar con tu orientación vocacional
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Correo electrónico
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="pl-10 rounded-xl border-border bg-background/50 focus:bg-background transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-foreground">
                    Contraseña
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 rounded-xl border-border bg-background/50 focus:bg-background transition-colors"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-muted-foreground">Recordarme</span>
                  </label>
                  <Link href="#" className="text-primary hover:text-primary/80 transition-colors">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>

                <Button className="w-full rounded-xl py-6 text-lg soft-shadow" size="lg">
                  <span className="flex items-center gap-2">
                    Iniciar Sesión
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">O continúa con</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full rounded-xl py-6 text-lg soft-shadow bg-transparent hover:bg-muted/50"
                size="lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Continuar con Google
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                ¿No tienes una cuenta?{" "}
                <Link href="/registro" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Regístrate aquí
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

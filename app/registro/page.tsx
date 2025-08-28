import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import Image from "next/image"
import { Mail, Lock, User, Calendar, ArrowRight } from "lucide-react"

export default function RegistroPage() {
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
              <CardTitle className="text-2xl font-bold text-foreground">Crea tu cuenta</CardTitle>
              <CardDescription className="text-muted-foreground">
                Únete a nuestra plataforma y descubre tu vocación profesional
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      Nombre
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Juan"
                        className="pl-10 rounded-xl border-border bg-background/50 focus:bg-background transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Apellido
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Pérez"
                      className="rounded-xl border-border bg-background/50 focus:bg-background transition-colors"
                    />
                  </div>
                </div>

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
                  <Label htmlFor="age" className="text-sm font-medium text-foreground">
                    Edad
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Select>
                      <SelectTrigger className="pl-10 rounded-xl border-border bg-background/50">
                        <SelectValue placeholder="Selecciona tu edad" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        {Array.from({ length: 10 }, (_, i) => i + 16).map((age) => (
                          <SelectItem key={age} value={age.toString()}>
                            {age} años
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                    Confirmar contraseña
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 rounded-xl border-border bg-background/50 focus:bg-background transition-colors"
                    />
                  </div>
                </div>

                <div className="flex items-start space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-border mt-1" />
                  <span className="text-muted-foreground">
                    Acepto los{" "}
                    <Link href="#" className="text-primary hover:text-primary/80 transition-colors">
                      términos y condiciones
                    </Link>{" "}
                    y la{" "}
                    <Link href="#" className="text-primary hover:text-primary/80 transition-colors">
                      política de privacidad
                    </Link>
                  </span>
                </div>

                <Button className="w-full rounded-xl py-6 text-lg soft-shadow" size="lg">
                  <span className="flex items-center gap-2">
                    Crear cuenta
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">O regístrate con</span>
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
                ¿Ya tienes una cuenta?{" "}
                <Link href="/login" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Inicia sesión aquí
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

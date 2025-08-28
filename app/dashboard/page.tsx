import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import {
  BookOpen,
  Target,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  BarChart3,
  User,
  Calendar,
  TrendingUp,
} from "lucide-react"

export default function DashboardPage() {
  // Datos simulados del usuario
  const user = {
    name: "María González",
    email: "maria@email.com",
    age: 17,
    hasCompletedTest: false, // Cambiar a true para ver el estado completado
    testProgress: 0, // 0-100
    joinDate: "Marzo 2024",
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header del Dashboard */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">¡Hola, {user.name}!</h1>
              <p className="text-muted-foreground mt-1">Bienvenida a tu panel de orientación vocacional</p>
            </div>
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 soft-shadow">
                <AvatarImage src="/placeholder.svg?height=48&width=48" />
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <p className="font-medium text-foreground">{user.name}</p>
                <p className="text-muted-foreground">{user.age} años</p>
              </div>
            </div>
          </div>
        </div>

        {/* Estado del Examen */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2 rounded-2xl soft-shadow border-0 bg-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Test Vocacional
                  </CardTitle>
                  <CardDescription>
                    {user.hasCompletedTest
                      ? "¡Felicidades! Has completado tu evaluación vocacional"
                      : "Descubre tu vocación profesional con nuestro test personalizado"}
                  </CardDescription>
                </div>
                <Badge variant={user.hasCompletedTest ? "default" : "secondary"} className="rounded-full">
                  {user.hasCompletedTest ? "Completado" : "Pendiente"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              {user.hasCompletedTest ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Test completado exitosamente</span>
                  </div>
                  <div className="flex gap-3">
                    <Button asChild className="rounded-xl">
                      <Link href="/resultados" className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Ver Resultados
                      </Link>
                    </Button>
                    <Button variant="outline" asChild className="rounded-xl bg-transparent">
                      <Link href="/examen">Retomar Test</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progreso</span>
                      <span className="font-medium">{user.testProgress}%</span>
                    </div>
                    <Progress value={user.testProgress} className="h-2" />
                  </div>
                  <div className="flex gap-3">
                    <Button asChild className="rounded-xl" size="lg">
                      <Link href="/examen" className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        {user.testProgress > 0 ? "Continuar Test" : "Comenzar Test"}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Información del Perfil */}
          <Card className="rounded-2xl soft-shadow border-0 bg-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="w-5 h-5 text-secondary" />
                Tu Perfil
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Email</span>
                  <span className="text-sm font-medium">{user.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Edad</span>
                  <span className="text-sm font-medium">{user.age} años</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Miembro desde</span>
                  <span className="text-sm font-medium">{user.joinDate}</span>
                </div>
              </div>
              <Button variant="outline" className="w-full rounded-xl bg-transparent">
                Editar Perfil
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Acciones Rápidas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="rounded-2xl soft-shadow border-0 bg-card hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Link href="/examen">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Realizar Test</h3>
                <p className="text-sm text-muted-foreground">Completa tu evaluación vocacional</p>
              </CardContent>
            </Link>
          </Card>

          <Card className="rounded-2xl soft-shadow border-0 bg-card hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Link href="/resultados">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Mis Resultados</h3>
                <p className="text-sm text-muted-foreground">Ve tus carreras recomendadas</p>
              </CardContent>
            </Link>
          </Card>

          <Card className="rounded-2xl soft-shadow border-0 bg-card hover:scale-105 transition-transform duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Estadísticas</h3>
              <p className="text-sm text-muted-foreground">Analiza tu progreso</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl soft-shadow border-0 bg-card hover:scale-105 transition-transform duration-300 cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Universidades</h3>
              <p className="text-sm text-muted-foreground">Explora opciones educativas</p>
            </CardContent>
          </Card>
        </div>

        {/* Actividad Reciente */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="rounded-2xl soft-shadow border-0 bg-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Actividad Reciente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {user.hasCompletedTest ? (
                  <>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium">Test vocacional completado</p>
                        <p className="text-xs text-muted-foreground">Hace 2 días</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                      <Award className="w-5 h-5 text-secondary" />
                      <div>
                        <p className="text-sm font-medium">Resultados generados</p>
                        <p className="text-xs text-muted-foreground">Hace 2 días</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Completa tu test vocacional para ver tu actividad</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl soft-shadow border-0 bg-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5 text-secondary" />
                Próximos Pasos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {!user.hasCompletedTest ? (
                  <>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/20">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">Completar test vocacional</p>
                        <p className="text-xs text-muted-foreground">Tiempo estimado: 15-20 min</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">Revisar resultados</p>
                        <p className="text-xs text-muted-foreground">Después del test</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/10 border border-secondary/20">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">Explorar universidades</p>
                        <p className="text-xs text-muted-foreground">Basado en tus resultados</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">Contactar universidades</p>
                        <p className="text-xs text-muted-foreground">Próximo paso recomendado</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

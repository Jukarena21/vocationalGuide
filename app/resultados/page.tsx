import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Award,
  Download,
  Share2,
  MapPin,
  Users,
  TrendingUp,
  BookOpen,
  Briefcase,
  Star,
  ExternalLink,
  Target,
  Brain,
  Heart,
  Zap,
} from "lucide-react"

// Datos simulados de resultados
const userProfile = {
  name: "María González",
  completedDate: "15 de Marzo, 2024",
  personalityType: "Analítica y Creativa",
  strengths: ["Resolución de problemas", "Comunicación", "Liderazgo", "Creatividad"],
  interests: ["Tecnología", "Diseño", "Ayudar a otros", "Innovación"],
}

const careerResults = [
  {
    id: 1,
    name: "Ingeniería de Sistemas",
    compatibility: 92,
    description: "Diseño y desarrollo de sistemas tecnológicos complejos",
    category: "Tecnología",
    averageSalary: "$3,500,000 - $6,000,000",
    jobOutlook: "Excelente",
    universities: [
      {
        name: "Universidad Nacional de Colombia",
        location: "Bogotá",
        ranking: "★★★★★",
        tuition: "Pública",
      },
      {
        name: "Universidad de los Andes",
        location: "Bogotá",
        ranking: "★★★★★",
        tuition: "$18,000,000/año",
      },
      {
        name: "Universidad EAFIT",
        location: "Medellín",
        ranking: "★★★★☆",
        tuition: "$16,500,000/año",
      },
    ],
  },
  {
    id: 2,
    name: "Diseño Gráfico",
    compatibility: 88,
    description: "Creación visual y comunicación a través del diseño",
    category: "Arte y Diseño",
    averageSalary: "$2,200,000 - $4,500,000",
    jobOutlook: "Bueno",
    universities: [
      {
        name: "Universidad Jorge Tadeo Lozano",
        location: "Bogotá",
        ranking: "★★★★☆",
        tuition: "$12,000,000/año",
      },
      {
        name: "Universidad Pontificia Bolivariana",
        location: "Medellín",
        ranking: "★★★★☆",
        tuition: "$14,000,000/año",
      },
    ],
  },
  {
    id: 3,
    name: "Psicología",
    compatibility: 85,
    description: "Estudio del comportamiento humano y procesos mentales",
    category: "Ciencias Sociales",
    averageSalary: "$2,800,000 - $5,200,000",
    jobOutlook: "Muy bueno",
    universities: [
      {
        name: "Universidad Nacional de Colombia",
        location: "Bogotá",
        ranking: "★★★★★",
        tuition: "Pública",
      },
      {
        name: "Universidad del Rosario",
        location: "Bogotá",
        ranking: "★★★★★",
        tuition: "$15,800,000/año",
      },
    ],
  },
]

export default function ResultadosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header de Resultados */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 soft-shadow-lg">
            <Award className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">¡Tus Resultados Están Listos!</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Hemos analizado tus respuestas y encontrado las carreras que mejor se adaptan a tu perfil
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="rounded-xl px-6 py-3 soft-shadow">
              <Download className="w-4 h-4 mr-2" />
              Descargar Resultados
            </Button>
            <Button variant="outline" className="rounded-xl px-6 py-3 bg-transparent">
              <Share2 className="w-4 h-4 mr-2" />
              Compartir
            </Button>
          </div>
        </div>

        {/* Perfil del Usuario */}
        <Card className="rounded-3xl soft-shadow-lg border-0 bg-card mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Brain className="w-6 h-6 text-primary" />
              Tu Perfil Vocacional
            </CardTitle>
            <CardDescription>Completado el {userProfile.completedDate}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-secondary" />
                  <h3 className="font-semibold text-foreground">Tipo de Personalidad</h3>
                </div>
                <p className="text-muted-foreground">{userProfile.personalityType}</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Fortalezas</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {userProfile.strengths.map((strength, index) => (
                    <Badge key={index} variant="secondary" className="rounded-full text-xs">
                      {strength}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-secondary" />
                  <h3 className="font-semibold text-foreground">Intereses</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {userProfile.interests.map((interest, index) => (
                    <Badge key={index} variant="outline" className="rounded-full text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Compatibilidad</h3>
                </div>
                <p className="text-2xl font-bold text-primary">{careerResults[0].compatibility}%</p>
                <p className="text-xs text-muted-foreground">Con tu carrera principal</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Carreras Recomendadas */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Briefcase className="w-7 h-7 text-primary" />
            Carreras Recomendadas
          </h2>

          <div className="space-y-6">
            {careerResults.map((career, index) => (
              <Card key={career.id} className="rounded-3xl soft-shadow-lg border-0 bg-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="rounded-full bg-primary/10 text-primary border-primary/20">
                          #{index + 1}
                        </Badge>
                        <Badge variant="outline" className="rounded-full">
                          {career.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl text-foreground mb-2">{career.name}</CardTitle>
                      <CardDescription className="text-base">{career.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary mb-1">{career.compatibility}%</div>
                      <p className="text-sm text-muted-foreground">Compatibilidad</p>
                    </div>
                  </div>
                  <Progress value={career.compatibility} className="h-2 mt-4" />
                </CardHeader>

                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="font-medium text-foreground">Perspectiva Laboral</span>
                      </div>
                      <p className="text-muted-foreground">{career.jobOutlook}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span className="font-medium text-foreground">Salario Promedio</span>
                      </div>
                      <p className="text-muted-foreground">{career.averageSalary}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-secondary" />
                        <span className="font-medium text-foreground">Universidades</span>
                      </div>
                      <p className="text-muted-foreground">{career.universities.length} opciones disponibles</p>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Universidades Recomendadas
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {career.universities.map((university, uniIndex) => (
                        <Card key={uniIndex} className="rounded-2xl soft-shadow border-0 bg-muted/20">
                          <CardContent className="p-4">
                            <div className="space-y-3">
                              <div>
                                <h5 className="font-medium text-foreground text-sm">{university.name}</h5>
                                <div className="flex items-center gap-1 mt-1">
                                  <MapPin className="w-3 h-3 text-muted-foreground" />
                                  <span className="text-xs text-muted-foreground">{university.location}</span>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs">{university.ranking}</span>
                                <span className="text-xs font-medium text-primary">{university.tuition}</span>
                              </div>
                              <Button size="sm" variant="outline" className="w-full rounded-xl text-xs bg-transparent">
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Ver más
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Próximos Pasos */}
        <Card className="rounded-3xl soft-shadow-lg border-0 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Target className="w-6 h-6 text-primary" />
              Próximos Pasos Recomendados
            </CardTitle>
            <CardDescription>Sigue estos pasos para avanzar en tu camino profesional</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-card soft-shadow">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Investiga las universidades</h4>
                    <p className="text-sm text-muted-foreground">
                      Contacta las universidades de tu interés y solicita información sobre admisiones
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-card soft-shadow">
                  <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-secondary">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Prepara tu aplicación</h4>
                    <p className="text-sm text-muted-foreground">
                      Reúne documentos, prepara para exámenes de admisión y solicita becas
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-card soft-shadow">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Explora experiencias</h4>
                    <p className="text-sm text-muted-foreground">
                      Busca prácticas, voluntariados o charlas relacionadas con tus carreras de interés
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-card soft-shadow">
                  <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-secondary">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Mantente actualizada</h4>
                    <p className="text-sm text-muted-foreground">
                      Sigue las tendencias en tus áreas de interés y conecta con profesionales
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" className="rounded-xl px-8 py-4 soft-shadow">
                Agendar Consulta Personalizada
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ChevronLeft, ChevronRight, Clock, BookOpen, CheckCircle } from "lucide-react"

// Datos simulados de preguntas
const questions = [
  {
    id: 1,
    type: "multiple-choice",
    category: "Intereses",
    question: "¿Cuál de estas actividades te resulta más atractiva?",
    options: [
      "Resolver problemas matemáticos complejos",
      "Escribir historias o artículos",
      "Ayudar a personas con sus problemas",
      "Diseñar y crear objetos",
      "Analizar datos y estadísticas",
    ],
  },
  {
    id: 2,
    type: "scale",
    category: "Habilidades",
    question: "¿Qué tan cómodo te sientes hablando en público?",
    description: "Califica del 1 al 10 tu nivel de comodidad",
  },
  {
    id: 3,
    type: "multiple-choice",
    category: "Valores",
    question: "¿Qué es más importante para ti en un trabajo?",
    options: [
      "Un salario alto",
      "Ayudar a la sociedad",
      "Creatividad y libertad",
      "Estabilidad y seguridad",
      "Reconocimiento y prestigio",
    ],
  },
  {
    id: 4,
    type: "multiple-choice",
    category: "Personalidad",
    question: "En un proyecto grupal, tú prefieres:",
    options: [
      "Liderar el equipo",
      "Aportar ideas creativas",
      "Organizar y planificar",
      "Investigar y analizar",
      "Apoyar a los demás",
    ],
  },
  {
    id: 5,
    type: "scale",
    category: "Intereses",
    question: "¿Qué tan interesado estás en la tecnología?",
    description: "Califica del 1 al 10 tu nivel de interés",
  },
]

export default function ExamenPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, any>>({})
  const [isCompleted, setIsCompleted] = useState(false)

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const question = questions[currentQuestion]

  const handleAnswer = (value: any) => {
    setAnswers((prev) => ({
      ...prev,
      [question.id]: value,
    }))
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setIsCompleted(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const hasAnswer = answers[question.id] !== undefined

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center py-20 px-4">
          <Card className="max-w-2xl w-full rounded-3xl soft-shadow-lg border-0 bg-card text-center">
            <CardContent className="p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">¡Examen Completado!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Hemos procesado tus respuestas y generado tu perfil vocacional personalizado.
              </p>
              <Button size="lg" className="rounded-xl px-8 py-6 text-lg soft-shadow" asChild>
                <a href="/resultados">Ver Mis Resultados</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header del Examen */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Test Vocacional</h1>
                <p className="text-sm text-muted-foreground">
                  Pregunta {currentQuestion + 1} de {questions.length}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>~15 min restantes</span>
            </div>
          </div>

          {/* Barra de Progreso */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progreso</span>
              <span className="font-medium text-foreground">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-3 rounded-full" />
          </div>
        </div>

        {/* Pregunta Actual */}
        <Card className="rounded-3xl soft-shadow-lg border-0 bg-card mb-8">
          <CardHeader className="pb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-medium rounded-full">
                {question.category}
              </span>
            </div>
            <CardTitle className="text-xl md:text-2xl text-foreground leading-relaxed">{question.question}</CardTitle>
            {question.description && <CardDescription className="text-base">{question.description}</CardDescription>}
          </CardHeader>

          <CardContent className="pb-8">
            {question.type === "multiple-choice" ? (
              <RadioGroup value={answers[question.id] || ""} onValueChange={handleAnswer} className="space-y-4">
                {question.options?.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-2xl hover:bg-muted/30 transition-colors cursor-pointer"
                  >
                    <RadioGroupItem value={option} id={`option-${index}`} className="text-primary" />
                    <Label htmlFor={`option-${index}`} className="flex-1 text-base cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            ) : question.type === "scale" ? (
              <div className="space-y-6">
                <div className="px-4">
                  <Slider
                    value={[answers[question.id] || 5]}
                    onValueChange={(value) => handleAnswer(value[0])}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground px-4">
                  <span>1 - Nada cómodo</span>
                  <span className="font-medium text-foreground">{answers[question.id] || 5}</span>
                  <span>10 - Muy cómodo</span>
                </div>
              </div>
            ) : null}
          </CardContent>
        </Card>

        {/* Navegación */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="rounded-xl px-6 py-3 bg-transparent"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>

          <div className="flex items-center gap-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentQuestion
                    ? "bg-primary"
                    : index < currentQuestion
                      ? "bg-green-500"
                      : answers[questions[index].id] !== undefined
                        ? "bg-secondary"
                        : "bg-muted"
                }`}
              />
            ))}
          </div>

          <Button onClick={handleNext} disabled={!hasAnswer} className="rounded-xl px-6 py-3 soft-shadow">
            {currentQuestion === questions.length - 1 ? "Finalizar" : "Siguiente"}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Ayuda */}
        <Card className="mt-8 rounded-2xl soft-shadow border-0 bg-muted/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <BookOpen className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Consejo</h3>
                <p className="text-sm text-muted-foreground">
                  Responde con honestidad basándote en tus verdaderos intereses y preferencias. No hay respuestas
                  correctas o incorrectas, solo tu perspectiva personal.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

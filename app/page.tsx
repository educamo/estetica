"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const galleryImages = [
    [
      {
        src: "/waxing-treatment-with-golden-wax.jpg",
        alt: "Tratamiento de depilación",
        description: "Depilación profesional con cera dorada para una piel suave y radiante",
      },
      {
        src: "/luxury-spa-products-and-treatments.jpg",
        alt: "Productos de spa",
        description: "Productos de alta calidad para tratamientos de spa y relajación",
      },
      {
        src: "/nail-art-and-manicure-tools.jpg",
        alt: "Arte de uñas",
        description: "Diseños únicos de arte en uñas con técnicas profesionales",
      },
      {
        src: "/hair-styling-treatment.png",
        alt: "Peinado profesional",
        description: "Cortes y peinados personalizados para realzar tu belleza natural",
      },
    ],
    [
      {
        src: "/beautiful-woman-with-elegant-makeup-and-styling.jpg",
        alt: "Maquillaje elegante",
        description: "Maquillaje profesional para ocasiones especiales",
      },
      {
        src: "/professional-nail-art-and-manicure.jpg",
        alt: "Manicure profesional",
        description: "Manicure y pedicure con acabados perfectos",
      },
      {
        src: "/professional-hair-styling-and-treatment.jpg",
        alt: "Tratamiento capilar",
        description: "Tratamientos capilares nutritivos y reparadores",
      },
      {
        src: "/hands-receiving-professional-spa-treatment.jpg",
        alt: "Tratamiento de manos",
        description: "Cuidado especializado para manos suaves y hermosas",
      },
    ],
  ]

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
      }, 5000) // Changes every 5 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [galleryImages.length, isPaused])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/luxury-spa-treatment-room.png')",
          }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Bella Soins, Inc.</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Tu refugio de belleza, bienestar y renovación</p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Descubre un espacio donde el cuidado personal se convierte en arte. En nuestro salón de belleza y spa, cada
            detalle está pensado para ofrecerte una experiencia única. Tratamientos que potencian tu belleza natural y
            servicios que elevan tu bienestar a su máxima expresión.
          </p>
          <p className="text-base mb-8 opacity-80">
            Porque creemos en sentirse bien, verse hermosa y brillar todos los días.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/appointment">Agenda tu cita</Link>
          </Button>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <img
                src="/beautiful-woman-with-elegant-makeup-and-styling.jpg"
                alt="Transformación estética"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Transformamos tu cuidado personal en alta estética.
              </h2>
              <p className="text-lg text-secondary-foreground mb-6">
                Reserva tu cita y vive la experiencia de transformar tu cuidado personal en alta estética. Tu piel, tu
                cabello, tu bienestar... elevado a su máxima expresión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Servicios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <img src="/images/waxing.png" alt="Depilación" className="rounded-lg object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Depilación</h3>
                <p className="text-muted-foreground mb-4">Técnicas expertas para una piel suave y radiante.</p>
                <Button asChild className="w-full bg-primary text-primary-foreground">
                  <Link href="/services/depilaciones">Ver más</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/professional-nail-art-and-manicure.jpg"
                    alt="Uñas"
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Uñas</h3>
                <p className="text-muted-foreground mb-4">
                  Manicure y pedicure con diseños únicos y productos de alta calidad.
                </p>
                <Button asChild className="w-full bg-primary text-primary-foreground">
                  <Link href="/services/unas">Ver más</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/professional-hair-styling-and-treatment.jpg"
                    alt="Peinados"
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Peinados</h3>
                <p className="text-muted-foreground mb-4">Cortes, peinados y tratamientos capilares personalizados.</p>
                <Button asChild className="w-full bg-primary text-primary-foreground">
                  <Link href="/services/peinados">Ver más</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-foreground">
            Galería de imágenes
          </h2>
          <div className="relative">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-lg transition-all"
              aria-label="Imagen anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-lg transition-all"
              aria-label="Siguiente imagen"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 px-12 transition-all duration-700 ease-in-out"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {galleryImages[currentSlide].map((image, index) => (
                <div key={index} className="aspect-square bg-card rounded-lg overflow-hidden relative group">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center p-4">
                    <p className="text-white text-center text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {image.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Ir a conjunto de imágenes ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/hands-receiving-professional-spa-treatment.jpg"
                alt="Tratamiento de manos"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Las manos son el primer contacto, el saludo al mundo y el reflejo de nuestro cuidado personal. En
                nuestro salón se combinan técnicas tradicionales con las más modernas tendencias para que cada sesión
                sea cómoda, segura y efectiva.
              </p>
              <p className="text-lg text-muted-foreground">
                Cada persona es única y merece un tratamiento que respete, embellezca y mejore su bienestar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Información de locación</h2>
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0"></div>
              <span className="text-foreground">Call: 000-000</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0"></div>
              <span className="text-foreground">bellasoins@email.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0"></div>
              <span className="text-foreground">Dirección: Calle 123, San José, Estado Carabobo, Venezuela</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

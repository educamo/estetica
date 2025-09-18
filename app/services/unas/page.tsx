import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function UnasPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Content */}
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold mb-8 text-foreground">Uñas</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Manicure y pedicure profesional con diseños únicos y productos de alta calidad. Cuida tus uñas con
                nuestros tratamientos especializados que realzan tu belleza natural y mantienen tus uñas saludables.
              </p>

              <div className="space-y-4">
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-card-foreground">manicure básico</h3>
                      <span className="text-lg font-bold text-primary">15.00$</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-card-foreground">pedicure completo</h3>
                      <span className="text-lg font-bold text-primary">25.00$</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-card-foreground">diseño de uñas</h3>
                      <span className="text-lg font-bold text-primary">35.00$</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-card-foreground">uñas acrílicas</h3>
                      <span className="text-lg font-bold text-primary">45.00$</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:w-1/2">
              <img
                src="/professional-nail-art-and-manicure-design.jpg"
                alt="Arte de uñas profesional"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

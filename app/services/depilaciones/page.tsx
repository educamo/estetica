import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function DepilacionesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Content */}
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold mb-8 text-foreground">Depilación</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Despídete del vello no deseado y da la bienvenida a una piel suave, limpia y radiante. Nuestro servicio
                de depilación combina técnica experta, productos de alta calidad y un ambiente relajante para que cada
                sesión sea cómoda, segura y efectiva.
              </p>

              {/* Price List */}
              <div className="space-y-4">
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-card-foreground">bozo</h3>
                      <span className="text-lg font-bold text-primary">1.00$</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-card-foreground">bikini</h3>
                      <span className="text-lg font-bold text-primary">3.00$</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2">
              <img
                src="/professional-waxing-treatment-with-golden-wax-bein.jpg"
                alt="Tratamiento de depilación con cera"
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

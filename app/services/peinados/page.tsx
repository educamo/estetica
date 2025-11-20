import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PeinadosPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Content */}
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-bold mb-8 text-foreground">Peinados</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Cortes, peinados y tratamientos capilares personalizados. Nuestros estilistas profesionales crearán el
                look perfecto para ti, combinando técnicas modernas con productos de alta calidad para realzar tu
                belleza natural.
              </p>

              <div className="space-y-4">
                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-card-foreground">corte básico</h3>
                      <span className="text-lg font-bold text-primary">20.00$</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-card-foreground">peinado de evento</h3>
                      <span className="text-lg font-bold text-primary">50.00$</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-card-foreground">tratamiento capilar</h3>
                      <span className="text-lg font-bold text-primary">30.00$</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-card-foreground">coloración</h3>
                      <span className="text-lg font-bold text-primary">65.00$</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-card-foreground">alisado permanente</h3>
                      <span className="text-lg font-bold text-primary">80.00$</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:w-1/2">
              <img
                src="./professional-hair-styling-and-cutting.jpg"
                alt="Peinado profesional"
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

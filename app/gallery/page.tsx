import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-foreground">Galería</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Images */}
            {[
              "professional waxing treatment with golden wax",
              "luxury spa products and essential oils",
              "nail art and manicure design",
              "hair styling and professional treatment",
              "relaxing spa environment",
              "beauty treatment tools and products",
            ].map((query, index) => (
              <div
                key={index}
                className="aspect-square bg-muted rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={`../abstract-geometric-shapes.png?height=400&width=400&query=${query}`}
                  alt={`Galería imagen ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

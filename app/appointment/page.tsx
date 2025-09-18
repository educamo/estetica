"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    fecha: "",
    hora: "",
    acompanantes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
    // Aquí iría la lógica para enviar el formulario
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-foreground">Formulario de citas estética</h1>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Form */}
            <div className="lg:w-1/2">
              <Card className="bg-secondary border-none shadow-none">
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="nombre" className="text-secondary-foreground text-lg">
                        Nombre del cliente
                      </Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        type="text"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="mt-2 bg-input border-border"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="telefono" className="text-secondary-foreground text-lg">
                        Teléfono del cliente
                      </Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="mt-2 bg-input border-border"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="fecha" className="text-secondary-foreground text-lg">
                        Fecha de la cita
                      </Label>
                      <Input
                        id="fecha"
                        name="fecha"
                        type="date"
                        value={formData.fecha}
                        onChange={handleChange}
                        className="mt-2 bg-input border-border"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="hora" className="text-secondary-foreground text-lg">
                        Hora de la cita
                      </Label>
                      <Input
                        id="hora"
                        name="hora"
                        type="time"
                        value={formData.hora}
                        onChange={handleChange}
                        className="mt-2 bg-input border-border"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="acompanantes" className="text-secondary-foreground text-lg">
                        Cantidad de acompañantes
                      </Label>
                      <Input
                        id="acompanantes"
                        name="acompanantes"
                        type="number"
                        min="0"
                        value={formData.acompanantes}
                        onChange={handleChange}
                        className="mt-2 bg-input border-border"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg"
                    >
                      Enviar
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Decorative Image */}
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full bg-primary rounded-lg opacity-20"></div>
                <img
                  src="/elegant-woman-with-hands-covering-face-in-spa-sett.jpg"
                  alt="Mujer elegante en spa"
                  className="relative rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

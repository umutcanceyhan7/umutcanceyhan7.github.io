import { Card, CardContent } from "@/components/ui/card"

export default function Accomplishments() {
  const accomplishments = [
    {
      title: "Innovation Challenge Winner",
      description:
        "First place in multiple innovation and coding challenges, demonstrating technical excellence and creative problem-solving.",
      images: [
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
      ],
    },
    {
      title: "Blockchain Training Leadership",
      description:
        "Successfully conducted comprehensive blockchain technology training for over 150 employees across the organization.",
      images: [
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
      ],
    },
    {
      title: "Entrepreneurship Program Success",
      description:
        "Led and secured $30K funding for entrepreneurship program, showcasing business development and leadership skills.",
      images: [
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
      ],
    },
    {
      title: "Executive Presentations",
      description:
        "Delivered strategic presentations and demos to C-level executives, driving key business decisions and digital transformation.",
      images: [
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
        "/placeholder.svg?height=200&width=200",
      ],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">Key Accomplishments</h2>

          <div className="space-y-16">
            {accomplishments.map((accomplishment, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
              >
                <div className="flex-1">
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">{accomplishment.title}</h3>
                      <p className="text-lg text-slate-600 leading-relaxed">{accomplishment.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {accomplishment.images.map((image, imageIndex) => (
                      <div key={imageIndex} className="polaroid-photo">
                        <div className="polaroid-frame">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`${accomplishment.title} ${imageIndex + 1}`}
                            className="w-full h-48 object-cover"
                          />
                          <div className="polaroid-caption">
                            <p className="text-sm text-slate-600 text-center mt-2">
                              {accomplishment.title} - Photo {imageIndex + 1}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

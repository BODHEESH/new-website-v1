'use client'
import Image from 'next/image'

export default function Gallery() {
  const images = [
    { title: 'Workshop Session' },
    { title: 'Team Collaboration' },
    { title: 'Hands-on Training' },
    { title: 'Success Stories' },
    { title: 'Expert Guidance' },
    { title: 'Innovation Lab' }
  ]

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Our Workshop in Action
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            See what makes our training experience unique
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-video relative">
                <Image 
                  src="https://img.freepik.com/free-vector/web-development-isometric-concept-composition-illustration_1284-55922.jpg?t=st=1763636797~exp=1763640397~hmac=9dc4518d3950b106bb3b26217a5c6e826d348b62e061437246a7d234141f59f1&w=1480"
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <span className="text-white text-lg font-semibold p-4">{image.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

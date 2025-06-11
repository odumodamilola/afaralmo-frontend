import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

interface CarouselProps {
  items: {
    quote: string
    name: string
    avatar: string
  }[]
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1 },
  })

  if (!items || items.length === 0) {
    return <p className="text-center text-gray-500">No items to display</p>
  }

  return (
    <div ref={sliderRef} className="keen-slider">
      {items.map((item, index) => (
        <div key={index} className="keen-slider__slide p-4">
          <div className="bg-white p-6 rounded-xl shadow-md text-center max-w-md mx-auto">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-16 h-16 mx-auto rounded-full mb-4"
            />
            <p className="text-gray-700 italic">“{item.quote}”</p>
            <h4 className="mt-4 font-semibold text-indigo-600">{item.name}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}

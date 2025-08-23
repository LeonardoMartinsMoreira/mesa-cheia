import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import FoodImage from '../../../public/image.jpg'

interface FoodItem {
  id: number
  name: string
  image: string
  position: string
  status: string
}

const categories = [
  'Salada',
  'Risoto',
  'Strogonoff',
  'Arroz, feijão e ovo',
  'Macarrão',
]

const foodItems: FoodItem[] = [
  {
    id: 1,
    name: 'Poke with chicken',
    image: FoodImage,
    position: '1º lugar',
    status: 'O mais amado',
  },
  {
    id: 2,
    name: 'Poke with chicken',
    image: FoodImage,
    position: '2º lugar',
    status: 'Muito querido',
  },
  {
    id: 3,
    name: 'Poke with chicken',
    image: FoodImage,
    position: '3º lugar',
    status: 'Entre os + amados',
  },
]

export function FoodVoting() {
  const [selectedCategory, setSelectedCategory] = useState('Salada')

  return (
    <div className="mb-4 pl-2 rounded-2xl">
      <h1 className="text-sm text-gray-900 mb-2">Vote no seu prato favorito</h1>
      <div className="flex gap-2 mb-2 pb-3  overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'secondary'}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={`rounded-md px-4 py-5 text-sm font-normal transition-colors whitespace-nowrap flex-shrink-0 ${
              selectedCategory === category
                ? 'bg-gray-900 text-white hover:bg-gray-800'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="space-y-6 pr-2 pt-2">
        {foodItems.map((item) => (
          <div key={item.id} className="flex pl-4 items-center gap-4">
            <div>
              <img
                src={item.image || '/placeholder.svg'}
                alt={item.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-teal-600"
              />
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
              <div className="flex gap-x-2 items-center">
                <Badge
                  variant="secondary"
                  className="bg-gray-100 p-2 px-4 rounded-4xl text-black hover:bg-gray-100"
                >
                  {item.position}
                </Badge>

                <p className="text-sm text-gray-300">{item.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

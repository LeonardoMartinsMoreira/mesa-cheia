import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { ChevronRight } from 'lucide-react'
import FoodImage from '../../../public/image.jpg'

export function VoteFoodDrawer() {
  const [, setLunchChoice] = useState(false)

  const ingredients = [
    { name: 'Tomate', emoji: '🍅' },
    { name: 'Alface', emoji: '🥬' },
    { name: 'Proteína', emoji: '🥩' },
    { name: 'Pepino', emoji: '🥒' },
    { name: 'Queijo', emoji: '🧀' },
  ]

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="bg-gray-800 hover:bg-gray-700 text-white px-9 py-5 rounded-full text-xs font-medium transition-colors">
          Votar
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <div className="flex py-6 w-full items-center justify-center">
            <img
              src={FoodImage}
              alt="Poke Bowl with Chicken"
              className="w-56 h-56 object-cover rounded-full"
            />
          </div>

          <div className="px-6 pb-4">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Poke with chicken
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco...
            </p>
          </div>

          <div className="px-6 pb-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm text-foreground">Ingredientes</h3>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>

            <div className="flex justify-between items-center">
              {ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2"
                >
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-xl">
                    {ingredient.emoji}
                  </div>
                  <span className="text-xs text-muted-foreground text-center">
                    {ingredient.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="px-6 pb-6">
            <h3 className="text-lg font-medium text-foreground mb-3">
              Você vai almoçar na escola hoje?
            </h3>

            <div className="flex gap-3">
              <Button
                variant="secondary"
                className="flex-1 bg-muted text-muted-foreground py-6 hover:bg-muted/80"
                onClick={() => setLunchChoice(false)}
              >
                Não, eu não vou
              </Button>
              <Button
                className="flex-1 bg-primary text-primary-foreground py-6 hover:bg-primary/90"
                onClick={() => setLunchChoice(true)}
              >
                Sim, eu vou!
              </Button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

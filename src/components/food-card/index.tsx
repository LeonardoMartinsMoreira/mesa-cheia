import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import FoodPhoto from '../../../public/image.jpg'

export function FoodCard() {
  return (
    <Card className="w-full rounded-3xl mt-15 flex flex-col items-center bg-gradient-to-br from-blue-300 via-blue-200 to-purple-300 border-0 shadow-lg">
      <div className="absolute flex top-38 w-48 h-48 rounded-full overflow-hidden border-4 border-teal-700 shadow-md">
        <img
          src={FoodPhoto}
          alt="Prato com salada de tomate e mozzarella"
          className="object-full"
        />
      </div>

      <div className="flex w-full flex-col items-center justify-end h-54">
        <div className="flex w-full px-4 gap-x-4">
          <p className="text-xl text-start font-semibold text-gray-800">
            Fique ligado no cardápio
            <br />
            do dia seguinte.
          </p>

          <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-2 rounded-full font-medium transition-colors">
            Votar
          </Button>
        </div>
      </div>
    </Card>
  )
}

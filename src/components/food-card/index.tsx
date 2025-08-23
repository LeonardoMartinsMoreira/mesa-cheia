import { Card } from '@/components/ui/card'
import FoodPhoto from '../../../public/image.jpg'
import { VoteFoodDrawer } from '../vote-food-drawer'

export function FoodCard() {
  return (
    <Card className="w-full rounded-3xl mt-15 flex flex-col items-center bg-gradient-to-br from-blue-300 via-blue-200 to-purple-200 border-0">
      <div className="absolute flex top-38 w-48 h-48 rounded-full overflow-hidden border-4 border-teal-700">
        <img
          src={FoodPhoto}
          alt="Prato com salada de tomate e mozzarella"
          className="object-full"
        />
      </div>

      <div className="flex w-full flex-col items-center justify-end h-50">
        <div className="flex w-full items-center px-2 gap-x-2">
          <div className="w-full">
            <p className="text-[20px] text-start font-semibold text-gray-800">
              Fique ligado no cardápio
              <br />
              do dia seguinte.
            </p>
          </div>

          <VoteFoodDrawer />
        </div>
      </div>
    </Card>
  )
}

import { FoodCard } from '@/components/food-card'
import { FoodVoting } from '@/components/food-voting'
import Header from '@/components/header'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      <div className="flex gap-y-6 flex-col pt-15">
        <div className="px-2">
          <h1 className="text-3xl font-bold">Olá Samara,</h1>
          <h1 className="text-3xl font-bold">Bom dia!</h1>
        </div>

        <div className="px-2">
          <FoodCard />
        </div>
        <FoodVoting />
      </div>
    </div>
  )
}

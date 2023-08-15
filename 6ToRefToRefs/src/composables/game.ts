import type { IGameInterface } from '@/types/GameInterface'
import { reactive, toRefs } from 'vue'

export function useGame() {
  const game = reactive<IGameInterface>({
    title: 'Mario',
    boss: 'Bowser',
    brother: "Luigi"
  })

  return{...toRefs(game)}
}
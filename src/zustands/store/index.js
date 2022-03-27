import create from 'zustand'
import data from './data.json'

let store = (set) => ({
  people: data.data,
  post: (person) => set((state) => ({ people: [...state.people, person] })),
  remove: (id) => set((state) => ({
    people: state.people.filter(item => item.id !== id)
  }))
})
const useStore = create(store)


export default useStore
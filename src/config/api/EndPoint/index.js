const EndPoint = {
  LOGIN: '/login',
  REGISTER: '/register',
  ANIMALS: 'animals',
  ANIMALS_DETAIL: (id) => `animals/${id}`,
  ANIMALS_UPDATE: (id) => `animals/${id}`,
}
export default EndPoint
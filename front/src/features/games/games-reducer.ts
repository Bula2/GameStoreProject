
export interface GamesState {
  data: {
    id: number,
    src: string,
    title: string,
    platform: string,
    price: number
  }[]
}

const initialState: GamesState = {
  data: [
    {id: 1, src: "/img/cyberpank.png", title: "Cyberpunk 2077", platform: "PS4/PS5", price: 2990},
    {id: 2, src: "/img/fifa22.png", title: "Fifa 22", platform: "PS4/PS5", price: 2990},
    {id: 3, src: "/img/godOfWar.png", title: "God Of War", platform: "PS4/PS5", price: 2990},
    {id: 4, src: "/img/spiderman.png", title: "Spider Man", platform: "PS4/PS5", price: 2990},
    {id: 5, src: "/img/cyberpank.png", title: "Cyberpunk 2077", platform: "PS4/PS5", price: 2990},
    {id: 6, src: "/img/fifa22.png", title: "Fifa 22", platform: "PS4/PS5", price: 2990},
    {id: 7, src: "/img/godOfWar.png", title: "God Of War", platform: "PS4/PS5", price: 2990},
    {id: 8, src: "/img/spiderman.png", title: "Spider Man", platform: "PS4/PS5", price: 2990},
    {id: 9, src: "/img/cyberpank.png", title: "Cyberpunk 2077", platform: "PS4/PS5", price: 2990},
    {id: 10, src: "/img/fifa22.png", title: "Fifa 22", platform: "PS4/PS5", price: 2990},
    {id: 11, src: "/img/godOfWar.png", title: "God Of War", platform: "PS4/PS5", price: 2990},
    {id: 12, src: "/img/spiderman.png", title: "Spider Man", platform: "PS4/PS5", price: 2990},
  ]
}


export const gamesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return (state);
  }
}

export default gamesReducer
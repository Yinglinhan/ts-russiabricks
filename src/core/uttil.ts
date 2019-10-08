export function getRandom (min:number,max:number){
    const dex = max - min
    return Math.floor(Math.random()*dex + min)
}
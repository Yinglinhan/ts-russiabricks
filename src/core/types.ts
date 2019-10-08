export interface Point{
    readonly x:number,
    readonly y:number
}

export interface VIewer{
    show():void;
    remove():void
}
export type Shape = Point[]
import { Point, VIewer } from "./types";


export class Square {
    constructor(
        private _point:Point,
        private _color:string
    ){

    }
 
    private _viewer?:VIewer

    public get color(){
        return this._color
    }

    public set point(val){
        this._point = val
        if(this.viewer){
            this.viewer.show()
        }


    }

    public get point(){
        return this._point
    }
    
    public set viewer(v){
        this._viewer = v
    }

    public get viewer(){
        return this._viewer;
        
    }


}
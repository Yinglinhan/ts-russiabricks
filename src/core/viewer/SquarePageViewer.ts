import { Square } from "../Square";
import $ from 'jquery'
import { VIewer } from "../types";
import PageConfig from "./PageConfig";

$("")
/**
 * 
 * 显示一个小方块到页面上
 */



 export class SquarePageViewer implements VIewer {
     
    private dom?: JQuery<HTMLElement>
    private isRemove:boolean = false
    
    show(): void {
        if(this.isRemove){
            return
        }
        if(!this.dom){
            this.dom = $("<div>").css({
                position:"absolute",
                width:PageConfig.SquareSize.width,
                height:PageConfig.SquareSize.height,
                border:"1px solid lightgray",
                boxSizing:"border-box"
            }).appendTo(this.container)
        }
        this.dom.css({
            left: this.square.point.x * PageConfig.SquareSize.width,
            top: this.square.point.y * PageConfig.SquareSize.height,
            background: this.square.color
        })
     }
     remove(): void {
         console.log(1)
        if(this.dom && !this.isRemove){
            this.dom.remove()
            console.log(2)
        }
     }
     
    constructor(
        private square:Square,
        private container: JQuery<HTMLElement>
        ){

    }

 }
import { Square } from "./core/Square";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from 'jquery'
import { SquareGroup } from "./core/SquareGroup";
import createTeris from "./core/Teris";


const brickShape = createTeris({x:2,y:3})

brickShape.squares.forEach((sq)=>{
    sq.viewer = new SquarePageViewer(sq,$("#root"))
    sq.viewer.show()
})

$("#move-down").click(function(){
    brickShape.centerPoint = {
        x:brickShape.centerPoint.x,
        y:brickShape.centerPoint.y + 1
    }
})

$("#move-right").click(function () {
    brickShape.centerPoint = {
        x: brickShape.centerPoint.x + 1,
        y: brickShape.centerPoint.y
    }
})

$("#move-left").click(function () {
    brickShape.centerPoint = {
        x: brickShape.centerPoint.x - 1,
        y: brickShape.centerPoint.y
    }
})

$("#move-up").click(function () {
    brickShape.centerPoint = {
        x: brickShape.centerPoint.x,
        y: brickShape.centerPoint.y - 1
    }
})



// const sq = new Square({x:10,y:20},"blue")

// sq.viewer = new SquarePageViewer(sq,$("#root"))
// sq.point = {
//     x:6,
//     y:2
// }






// $("#move").click(function(){
//     sq.point = {
//         x:sq.point.x,
//         y:sq.point.y+1
//     }
// })

// $("#remove").click(function(){
//     if(sq.viewer){
//         sq.viewer.remove()
//     }
// })
// $("#showup").click(function(){
//     if(sq.viewer){
//         sq.viewer.remove()
//         sq.viewer = new SquarePageViewer(sq, $("#root"))
//         sq.viewer.show()
//     }
    
// })
import React from "react";
import Sketch from "react-p5";

var points = [
  [15, 15, 1],
  [1185, 15, 1],
  [15, 685, 1],
  [1185, 685, 1],
  [600, 350, 1]
]

var x = 600
var y = 350
var xAdd = 0
var yAdd = 0
var i = 0;
var iteration = 0;

export default (props) => {
	const setup = (p5, canvasParentRef) => {
    let canvas = p5.createCanvas(1200, 700).parent(canvasParentRef);
	};

	const draw = (p5) => {
		drawCircle(p5, x, y)
    followPath(p5, points)
	};

  const drawCircle = (p5, px, py) => {
    p5.background(255);
    p5.fill('red')
    p5.circle(px, py, 40);
  }

  const followPath = (p5, points) => {
    if (iteration == 0){
      sleep(1000);
    }
    //console.log(iteration)
    try {
      var destX = points[i][0]
      var destY = points[i][1]
      var time = points[i][2]
      var variance = 10
      var accel = 0.01
      if (x < destX && Math.abs(destX - x) > variance) {
        xAdd += time * accel
        x += xAdd
      }
      if (x > destX && Math.abs(destX - x) > variance) {
        xAdd -= time * accel
        x += xAdd
      }
      if (y < destY && Math.abs(destY - y) > variance) {
        yAdd += time * accel
        y += yAdd
      }
      if (y > destY && Math.abs(destY - y) > variance) {
        yAdd -= time * accel
        y += yAdd
      }
      if (Math.abs(destX - x) <= variance && Math.abs(destY - y)) {
        xAdd = 0
        yAdd = 0
        i++
      };
    } catch (error) {
      p5.background(255)
      p5.textSize(1200 / 10);
      p5.fill('red');
      let completionMessage = p5.text('Calibration Finished!', 50, 300, 1200, 700);
    }
    iteration++;
  }

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  render(); {
    if (typeof window !== 'undefined') {
      const Sketch = loadable(() => import ('react-p5'))
      return <Sketch setup={setup} draw={draw} 
      style={{
        position: "auto",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        textAlign: "center",
        zindex: 9,
        width: "auto",
        height: "auto",
        }}
    />
    }
    else {
      return null;
    };
  };
};
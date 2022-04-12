/// <reference path="./node_modules/@types/p5/global.d.ts" />

class Entity {
    constructor(bound_width,bound_height) {
        //Assigning random values
        this.x = Math.round(Math.random() * bound_width);
        this.y = Math.round(Math.random() * bound_height);
        this.w = Math.round(Math.random() * 200);
        this.h = Math.round(Math.random() * 200);
        this.velocity = Math.random() * 200;
    }

    render() {
        //Moves the rectangle based on velocity relative to the framerate
        this.y -= this.velocity * 1 / frameRate();

        //Wraps coordinate if it goes off-screen
        if(this.y < -this.h) {
            this.y = height - this.h;
        }

        //Renders rectangle
        rect(this.x,this.y,this.w,this.h);
        if(this.y < 0) {
            //renders a secondary one if it's wrapping around
            rect(this.x,this.y + height,this.w,this.h)
        }
    }
}

//Create entities array
const entities = []

function setup() {
    createCanvas(windowWidth - 20,windowHeight - 20);
    //Populate based on a random number of values
    for(var i = 0; i < 500; i++) {
        entities.push(new Entity(width,height));
    }
}

function draw() {
    background(220);
    //Render each entity
    entities.forEach((entity) => entity.render());
}

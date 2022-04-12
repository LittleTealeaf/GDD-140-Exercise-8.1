/// <reference path="./node_modules/@types/p5/global.d.ts" />

class Entity {
    constructor(bound_width,bound_height) {
        this.x = Math.round(Math.random() * bound_width);
        this.y = Math.round(Math.random() * bound_height);
        this.w = Math.round(Math.random() * 200);
        this.h = Math.round(Math.random() * 200);

        this.velocity = Math.random() * 200;
    }

    render() {
        this.y -= this.velocity * 1 / frameRate();
        rect(this.x,this.y,this.w,this.h);
        if(this.y < 0) {
            rect(this.x,this.y + height,this.w,this.h)
        }
        if(this.y < -this.h) {
            this.y = height - this.h;
        }
    }
}

var entities = []

function setup() {
    createCanvas(windowWidth - 20,windowHeight - 20);
    for(var i = 0; i < random(0,500); i++) {
        entities.push(new Entity(width,height));
    }
}

function draw() {
    background(220);
    entities.forEach((entity) => entity.render());
}

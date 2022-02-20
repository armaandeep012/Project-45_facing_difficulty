class character {
    constructor(x, y, w, h) {
        this.body = Bodies.rectangle(x, y, w, h)
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }

    show(){
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill("brown");
    rect(0, 0, this.w, this.h);
    pop();
    }
}
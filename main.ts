class Farts {
    sprites:Array<Sprite>;

    constructor() {
        this.sprites = [];
    }

    setVelocity(vx: number, vy: number) {
        this.sprites.forEach(s=>
            s.vx = vx;
            s.vy = vy;
        })
    }


}

class Farts {
    sprites:Array<Sprite>;

    constructor() {
        this.sprites = [];
    }

    public setVelocity(vx: number, vy: number) {
        this.sprites.forEach(s=>
            s.vx = vx;
            s.vy = vy;
        })
    }


}

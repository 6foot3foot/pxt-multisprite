

namespace multisprite {

}

class MultiSprite {
    private sprites: Array<Sprite>();

    add(sprite:Sprite):void {
        
        this.sprites.push(sprite);
    }
}
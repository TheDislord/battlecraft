namespace SpriteKind {
    export const Entity = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Entity, function (sprite, otherSprite) {
	
})
tiles.setTilemap(tilemap`level1`)
let Character = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(Character)
controller.moveSprite(Character)
let Tree = sprites.create(img`
    . . . . . . . c c . . . . . . . 
    . . . . c c c 6 5 c 6 6 . . . . 
    . . . . c 6 c 5 5 c 7 6 . . . . 
    . . . 6 c c 7 5 5 7 c 6 6 . . . 
    . . c c 7 7 7 7 7 5 7 7 c 6 . . 
    . 6 6 6 c 6 7 7 7 7 6 c c 6 6 . 
    c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
    c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
    . c c 7 6 6 6 6 6 7 7 7 7 c 6 . 
    . c 7 7 6 6 7 6 6 7 7 6 7 7 c . 
    . c c c c 7 7 6 f 7 7 c c c c . 
    . . . . c 7 c f f c 7 c . . . . 
    . . . . . 6 f e e e c . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e . e e . e e . . . . 
    . . . . . . . e e . . . . . . . 
    `, SpriteKind.Entity)
let Tree2 = sprites.create(img`
    . . . . . . . c c . . . . . . . 
    . . . . c c c 6 5 c 6 6 . . . . 
    . . . . c 6 c 5 5 c 7 6 . . . . 
    . . . 6 c c 7 5 5 7 c 6 6 . . . 
    . . c c 7 7 7 7 7 5 7 7 c 6 . . 
    . 6 6 6 c 6 7 7 7 7 6 c c 6 6 . 
    c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
    c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
    . c c 7 6 6 6 6 6 7 7 7 7 c 6 . 
    . c 7 7 6 6 7 6 6 7 7 6 7 7 c . 
    . c c c c 7 7 6 f 7 7 c c c c . 
    . . . . c 7 c f f c 7 c . . . . 
    . . . . . 6 f e e e c . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e . e e . e e . . . . 
    . . . . . . . e e . . . . . . . 
    `, SpriteKind.Entity)
let Tree3 = sprites.create(img`
    . . . . . . . c c . . . . . . . 
    . . . . c c c 6 5 c 6 6 . . . . 
    . . . . c 6 c 5 5 c 7 6 . . . . 
    . . . 6 c c 7 5 5 7 c 6 6 . . . 
    . . c c 7 7 7 7 7 5 7 7 c 6 . . 
    . 6 6 6 c 6 7 7 7 7 6 c c 6 6 . 
    c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
    c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
    . c c 7 6 6 6 6 6 7 7 7 7 c 6 . 
    . c 7 7 6 6 7 6 6 7 7 6 7 7 c . 
    . c c c c 7 7 6 f 7 7 c c c c . 
    . . . . c 7 c f f c 7 c . . . . 
    . . . . . 6 f e e e c . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e . e e . e e . . . . 
    . . . . . . . e e . . . . . . . 
    `, SpriteKind.Entity)
let Tree4 = sprites.create(img`
    . . . . . . . c c . . . . . . . 
    . . . . c c c 6 5 c 6 6 . . . . 
    . . . . c 6 c 5 5 c 7 6 . . . . 
    . . . 6 c c 7 5 5 7 c 6 6 . . . 
    . . c c 7 7 7 7 7 5 7 7 c 6 . . 
    . 6 6 6 c 6 7 7 7 7 6 c c 6 6 . 
    c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
    c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
    . c c 7 6 6 6 6 6 7 7 7 7 c 6 . 
    . c 7 7 6 6 7 6 6 7 7 6 7 7 c . 
    . c c c c 7 7 6 f 7 7 c c c c . 
    . . . . c 7 c f f c 7 c . . . . 
    . . . . . 6 f e e e c . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e . e e . e e . . . . 
    . . . . . . . e e . . . . . . . 
    `, SpriteKind.Entity)
let Tree5 = sprites.create(img`
    . . . . . . . c c . . . . . . . 
    . . . . c c c 6 5 c 6 6 . . . . 
    . . . . c 6 c 5 5 c 7 6 . . . . 
    . . . 6 c c 7 5 5 7 c 6 6 . . . 
    . . c c 7 7 7 7 7 5 7 7 c 6 . . 
    . 6 6 6 c 6 7 7 7 7 6 c c 6 6 . 
    c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
    c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
    . c c 7 6 6 6 6 6 7 7 7 7 c 6 . 
    . c 7 7 6 6 7 6 6 7 7 6 7 7 c . 
    . c c c c 7 7 6 f 7 7 c c c c . 
    . . . . c 7 c f f c 7 c . . . . 
    . . . . . 6 f e e e c . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e . e e . e e . . . . 
    . . . . . . . e e . . . . . . . 
    `, SpriteKind.Entity)
animation.runImageAnimation(
Character,
[img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . . f e 4 d d d d 4 e f e . . 
    . . f e f 2 2 2 2 e d d 4 e . . 
    . . e 4 f 2 2 2 2 e d d e . . . 
    . . . . f 4 4 5 5 f e e . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f . . . . . . . . . 
    `,img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f e e 2 2 2 2 2 2 e f f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . e f e 4 d d d d 4 e f . . . 
    . . e 4 d d e 2 2 2 2 f e f . . 
    . . . e d d e 2 2 2 2 f 4 e . . 
    . . . . e e f 5 5 4 4 f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . . . . f f f . . . . 
    `],
200,
true
)

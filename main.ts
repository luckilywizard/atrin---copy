enum RadioMessage {
    message1 = 49434
}
controller.combos.attachCombo("", function () {
	
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    pause(350)
    animation.runImageAnimation(
    mySprite,
    [img`
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .......ffffffffff........
        .......f77777777f........
        .......f77777777f........
        .......f77f77f77f........
        .....fff77f77f77fff......
        .....fff777ff777fff......
        .....fff77777777fff......
        .......f77777777f........
        .......ffffffffff........
        ........ff....ff.........
        ........ff....ff.........
        ........ff....ff.........
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        `,img`
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .......ffffffffff........
        .......f77777777f........
        .......f77777777f........
        .......f77f77f77f........
        .....fff77f77f77fff7.....
        .....fff777ff777fff7.....
        .....fff77777777fff7.....
        .......f77777777f........
        .......ffffffffff........
        ........ff....ff.........
        ........ff....ff.........
        ........ff....ff.........
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        `,img`
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .......ffffffffff........
        .......f77777777f........
        .......f77777777f........
        .......f77f77f77f........
        .....fff77f77f77fff......
        .....fff777ff777fff......
        .....fff77777777fff......
        .......f77777777f........
        .......ffffffffff........
        ........ff....ff.........
        ........ff....ff.........
        ........ff....ff.........
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        .........................
        `],
    50,
    false
    )
    projectile = sprites.createProjectileFromSprite(assets.image`myImage1`, mySprite, 50, 50)
    music.pewPew.play()
})
controller.combos.attachCombo("" + controller.combos.idToString(controller.combos.ID.A) + controller.combos.idToString(controller.combos.ID.A) + controller.combos.idToString(controller.combos.ID.B), function () {
    music.zapped.play()
    projectile3 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 9 9 6 . . . . . . 
        . . . . 6 6 6 6 9 9 9 . . . . . 
        . . . 6 6 9 9 6 6 9 9 9 . . . . 
        . . 6 6 9 9 6 6 6 6 9 9 9 . . . 
        . 6 6 9 9 9 9 9 6 6 6 9 9 9 . . 
        . 6 6 9 9 9 9 9 9 9 6 6 9 9 . . 
        . 6 6 9 9 9 9 9 9 9 6 6 9 9 . . 
        . 6 6 9 9 9 9 9 9 6 6 9 9 9 . . 
        . . 6 6 9 9 9 9 9 6 9 9 9 . . . 
        . . . 6 6 6 9 9 6 6 9 9 . . . . 
        . . . . 6 6 6 6 6 9 9 . . . . . 
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 50)
})
statusbars.onZero(StatusBarKind.Magic, function (status) {
	
})
radio.onReceivedValue(function (name, value) {
	
})
controller.combos.attachSpecialCode(function () {
	
})
sprites.onCreated(SpriteKind.Player, function (sprite) {
	
})
let projectile3: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`minimap`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f f f f . 
    . . . . . f 7 7 7 7 7 7 7 7 f . 
    . . . . . f 7 7 7 7 7 7 7 7 f . 
    . . . . . f 7 7 f 7 7 f 7 7 f . 
    . . . f f f 7 7 f 7 7 f 7 7 f f 
    . . . f f f 7 7 7 f f 7 7 7 f f 
    . . . . . f 7 7 7 7 7 7 7 7 f . 
    . . . . . f 7 7 7 7 7 7 7 7 f . 
    . . . . . f f f f f f f f f f . 
    . . . . . . f f f . . f f f . . 
    . . . . . . f f f . . f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 115, 115)
let CHest = sprites.create(assets.image`chEST`, SpriteKind.Food)
scene.cameraFollowSprite(mySprite)
info.setLife(5)
forever(function () {
	
})
forever(function () {
	
})

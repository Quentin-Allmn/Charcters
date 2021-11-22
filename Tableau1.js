class Tableau1 extends Phaser.Scene{

    preload(){
        for (let t=1;t<=10;t++) {
            this.load.image('layer' + t, 'assets/boy/boy_style_1/PNG/idle/Layer-' + t + '.png');
        }
    }
    create(){
        /**
         * AnimationIdle1
         * @type {Phaser.GameObjects.Sprite}
         */
        this.idle = this.add.sprite(0, 0, 'animation').setOrigin(0,0);
        //animation de idle1

        this.anims.create({
            key: 'animation',
            frames: [
                {key:'layer1'},
                {key:'layer2'},
                {key:'layer3'},
                {key:'layer4'},
                {key:'layer5'},
                {key:'layer6'},
                {key:'layer7'},
                {key:'layer8'},
                {key:'layer9'},
                {key:'layer10'},
            ],
            frameRate: 12,
            repeat: -1
        });
        this.idleAnimation.play('animation');

    }
}
class Tableau1 extends Phaser.Scene{

    preload(){
        for (let t=1;t<=10;t++) {
            this.load.image('layer' + t, 'assets/boy/boy_style_1/PNG/Layer-' + t + '.png');
        }
    }
    create(){
        /**
         * AnimationIdle1
         * @type {Phaser.GameObjects.Sprite}
         */
        this.idleAnimation = this.add.sprite(100, 100, 'idleAnimation').setOrigin(0,0);
        //animation de idle1
        this.anims.create({
            key: 'idle1',
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
            frameRate: 16,
            repeat: -1
        });
        this.idleAnimation.play('idle1');

    }
}
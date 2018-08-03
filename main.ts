/**
* Darts
*/
//% weight=100 color=#6699CC icon="\uf140"
//% groups='["Create", "Actions", "Properties"]'
namespace Darts {
    /**
     * A dart
     **/
    //% blockNamespace=Darts color="#6699CC" blockGap=8
    export class Dart {
        public dart: Sprite;
        private bkgd: Image;

        //% group="Properties" blockSetVariable="myDart"
        //% blockCombine block="angle"
        public angle: number;
        //% group="Properties" blockSetVariable="myDart"
        //% blockCombine block="power"
        public pow: number;
        //% group="Properties" blockSetVariable="myDart"
        //% blockCombine block="tracing time (seconds)"
        public iter: number;
        //% group="Properties" blockSetVariable="myDart"
        //% blockCombine block="trace color"
        public traceColor: number;
        //% group="Properties" blockSetVariable="myDart"
        //% blockCombine block="gravity"
        public gravity: number;

        private controlKeys: boolean;
        private trace: boolean;

        public constructor(img: Image,
                        kind: number,
                        x: number,
                        y: number) {
            this.dart = sprites.create(img, kind);
            this.dart.x = x;
            this.dart.y = y;

            this.gravity = 20;
            this.pow = 50;
            this.angle = 10;
            this.iter = 3;
            this.bkgd = scene.backgroundImage();

            this.controlKeys = false;
            this.trace = false;
            this.traceColor = 1;
        }

        /**
         * Set whether to show the trace for the estimated path
         * @param on whether to turn on or off this feature, eg: true
         */
        //% blockId=setTrace block="trace %dart(myDart) path estimate||%flag %on=toggleOnOff"
        //% weight=7
        //% group="Action"
        public setTrace(on: boolean = true) {
            let __dart: Sprite = this.dart;
            let __this: Dart = this;
            this.trace = on;
            game.onUpdateInterval(50, function () {
                __this.bkgd.fill(15);
                if (!__dart.ay && __this.trace) {
                    let xComp = Darts.xComponent(__this.angle, __this.pow);
                    let yComp = Darts.yComponent(__this.angle, __this.pow);

                    for (let i: number = 0; i < __this.iter; i += (i | 1) / 10) {
                        let x = __dart.x + i * xComp;
                        let y = __dart.y + i * yComp + i * i * __this.gravity / 2;
                        __this.bkgd.setPixel(x, y, __this.traceColor);
                    }
                }
            })
        }

        /**
         * Throw the dart with the current settings
         */
        //% blockId=throwDart block="throw %dart(myDart)"
        //% weight=7
        //% group="Action"
        public throwDart() {
            this.dart.vx = this.pow * Math.cos(Darts.degreeToRadian(this.angle));
            this.dart.vy = this.pow * Math.sin(Darts.degreeToRadian(this.angle));
            this.dart.ay = this.gravity;
        }

        /**
         * Stop the dart at the current location
         */
        //% blockId=stopDart block="stop %dart(myDart)"
        //% weight=7
        //% group="Action"
        public stopDart() {
            this.dart.ay = 0;
            this.dart.vx = 0;
            this.dart.vy = 0;
        }

        /**
         * Set whether to control the dart with the arrow keys; left and right
         * to adjust the angle, and up and down to increase / decrease power
         * @param on whether to turn on or off this feature, eg: true
         */
        //% blockId=controlKeys block="control %dart(myDart) with arrow keys||%flag %on=toggleOnOff"
        //% weight=7
        //% group="Action"
        public controlWithArrowKeys(on: boolean = true) {
            let __this: Dart = this;
            this.controlKeys = on;
            game.onUpdate(function () {
                if (__this.controlKeys) {
                    __this.angle += controller.dx() / 5;
                    __this.pow -= controller.dy() / 5;
                }
            })
        }
    }
    
    /**
     * Creates a new dart from an image and kind
     * @param img the image for the sprite
     * @param kind the kind to make the dart
     * @param x optional initial x position, eg: 10
     * @param y optional initial y position, eg: 110
     */
    //% blockId=dartsCreate block="dart %img=screen_image_picker of kind %kind=spritetype || at x %x y %y"
    //% expandableArgumentMode=toggle
    //% inlineInputMode=inline
    //% blockSetVariable=myDart
    //% weight=100
    //% group="Create"
    export function create(img: Image,
                            kind: number,
                            x: number = 10,
                            y: number = 110): Dart {
        return new Dart(img, kind, x, y);
    }

    export function degreeToRadian(degree: number): number {
        return degree * Math.PI / 180;
    }

    export function xComponent(degree: number, magnitude: number): number {
        return magnitude * Math.cos(degreeToRadian(degree));
    }

    export function yComponent(degree: number, magnitude: number): number {
        return magnitude * Math.sin(degreeToRadian(degree));
    }
}
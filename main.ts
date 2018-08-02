
class Dart {
    dart: Sprite;
    angle: number;
    pow: number;
    iter: number;
    gravity: number;
    bkgd: Image;

    controlKeys: boolean;
    trace: boolean;
    traceColor: number;

    constructor(img: Image,
            kind: number,
            // x: number = 10,
            // y: number = scene.screenHeight() - 20) {
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

    setTrace(on: boolean) {
        let __dart: Sprite = this.dart;
        let __this: Dart = this;
        game.onUpdateInterval(50, function () {
            __this.bkgd.fill(15);
            if (!__dart.ay) {
                let xComp = xComponent(__this.angle, __this.pow);
                let yComp = yComponent(__this.angle, __this.pow);

                for (let i: number = 0; i < __this.iter; i += (i | 1) / 10) {
                    let x = __dart.x + i * xComp;
                    let y = __dart.y + i * yComp + i * i * __this.gravity / 2;
                    __this.bkgd.setPixel(x, y, 1);
                }
            }
        })
    }

    throwDart() {
        this.dart.vx = this.pow * Math.cos(degreeToRadian(this.angle));
        this.dart.vy = this.pow * Math.sin(degreeToRadian(this.angle));
        this.dart.ay = this.gravity;
    }

    stopDart() {
        this.dart.ay = 0;
        this.dart.vx = 0;
        this.dart.vy = 0;
    }

    controlWithArrowKeys(on: boolean) {
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

function degreeToRadian(degree: number): number {
    return degree * Math.PI / 180;
}

function xComponent(degree: number, magnitude: number): number {
    return magnitude * Math.cos(degreeToRadian(degree));
}

function yComponent(degree: number, magnitude: number): number {
    return magnitude * Math.sin(degreeToRadian(degree));
}
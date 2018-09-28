# pxt-darts

A slightly editted version of this has been transferred to be a built in library in [Arcade](https://github.com/microsoft/pxt-arcade).

* [Simple Example Game](https://makecode.com/_3PeFj8ceTch4)
* [Baseball Game](https://makecode.com/_b8HJCragee2t)


Note: darts take control over the background image when tracing paths; this means that changing the image using scene category will not function properly. See `updateBackground`.

## Darts namespace blocks:
```ts
darts.create(Image, kind, x?, y?): Dart
```
> create a new dart with the given image / kind. Optionally pass inital x / y coordinates

## Dart blocks:
```ts
Dart.throw(): void
```

> throw the dart in the given direction

```ts
Dart.stop(): void
```

> stop the dart at it's current location

```ts
Dart.setTrace(boolean): void
```

> trace the 'estimated' path of the dart (or turn off if passed false)

```ts
Dart.controlWithArrowKeys(boolean?): void
```

> control direction and power of dart with arrow keys (or turn off if passed false)

```ts
Dart.updateBackground(img: Image): void
```

> set background image for dart to trace on

### Dart Properties:
* angle: angle to throw dart at
* power: power to throw dart at
* tracing time (seconds): how long in seconds to estimate movement
* trace color: color of trace (if trace is set to on)
* gravity: how much downward acceleration to apply to dart
* wind: how much horizontal acceleration to apply to dart
* angle rate: rate at which angle should change when controlling dart relative to normal rate (i.e. a rate of 2 will make it change twice as fast)
* power rate: rate at which power should change when controlling dart relative to normal rate (i.e. a rate of 2 will make it change twice as fast)

## License

MIT

Copyright 2018 Joseph Wunderlich

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

* [Icon source](https://pixabay.com/en/darts-target-bull-s-eye-arrow-2349477/)
* [Icon / Pixabay license](https://pixabay.com/en/service/terms/#usage)

## Supported targets

* for PXT/arcade
(The metadata above is needed for package search.)

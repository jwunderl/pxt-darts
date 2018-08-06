# pxt-darts

[Example Game](https://makecode.com/_UMqKAuRJoPkA)

## Darts namespace blocks:
```ts
Darts.create(Image, kind, x?, y?): Dart
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

### Dart Properties:
* angle: angle to throw dart at
* power: power to throw dart at
* tracing time (seconds): how long in seconds to estimate movement
* trace color: color of trace (if trace is set to on)
* gravity: how much downward acceleration to apply to dart
* wind: how much horizontal acceleration to apply to dart

## License

MIT

Copyright 2018 Joseph Wunderlich

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Supported targets

* for PXT/arcade
(The metadata above is needed for package search.)


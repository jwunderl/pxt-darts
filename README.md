# pxt-darts

[Example Game](https://makecode.com/_UMqKAuRJoPkA)

## Darts namespace blocks:
```ts
Darts.create(Image, kind, x?, y?): Darts.Dart
```
> create a new dart with the given image / kind. Optionally pass inital x / y coordinates

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
* angle angle to throw dart at
* power: power to throw dart at
* tracing time (seconds): how long in seconds to estimate movement
* trace color: color of trace (if trace is set to on)
* gravity: how much downward force to apply to dart


## TODO

- [ ] Maybe add 'wind' / acceleration in x direction

## License

## Supported targets

* for PXT/arcade
(The metadata above is needed for package search.)


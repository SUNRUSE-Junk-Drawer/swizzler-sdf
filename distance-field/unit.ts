import {
  compileJavascript,
  reference,
  Vec2Primitive,
  Vec3Primitive,
} from "swizzler";
import { DistanceField } from "..";
import ".";

export function prepare2d(
  distanceField: DistanceField<Vec2Primitive>
): (description: string, x: number, y: number, distance: number) => void {
  let compiled: (point: readonly [number, number]) => void;

  beforeAll(() => {
    compiled = new Function(
      `point`,
      compileJavascript(`return `, distanceField(reference(`vec2`, `point`)))
    ) as (point: readonly [number, number]) => void;
  });

  return (description, x, y, distance) => {
    it(description, () => {
      expect(compiled([x, y])).toBeCloseTo(distance);
    });
  };
}

export function prepare3d(
  distanceField: DistanceField<Vec3Primitive>
): (
  description: string,
  x: number,
  y: number,
  z: number,
  distance: number
) => void {
  let compiled: (point: readonly [number, number, number]) => void;

  beforeAll(() => {
    compiled = new Function(
      `point`,
      compileJavascript(`return `, distanceField(reference(`vec3`, `point`)))
    ) as (point: readonly [number, number, number]) => void;
  });

  return (description, x, y, z, distance) => {
    it(description, () => {
      expect(compiled([x, y, z])).toBeCloseTo(distance);
    });
  };
}

import { compileJavascript, reference } from "swizzler";
import { DistanceField3d } from "../..";
import ".";

export function prepare(
  distanceField: DistanceField3d
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
      "point",
      compileJavascript("return ", distanceField(reference("vec3", "point")))
    ) as (point: readonly [number, number, number]) => void;
  });

  return (description, x, y, z, distance) => {
    it(description, () => {
      expect(compiled([x, y, z])).toBeCloseTo(distance);
    });
  };
}

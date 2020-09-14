import { Vec2Primitive, min } from "swizzler";
import { DistanceField } from "../../../distance-field";

export function union2d(
  a: DistanceField<Vec2Primitive>,
  b: DistanceField<Vec2Primitive>
): DistanceField<Vec2Primitive> {
  return (point) => {
    return min(a(point), b(point));
  };
}

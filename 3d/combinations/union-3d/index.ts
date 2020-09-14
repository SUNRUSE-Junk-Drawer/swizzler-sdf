import { Vec3Primitive, min } from "swizzler";
import { DistanceField } from "../../../distance-field";

export function union3d(
  a: DistanceField<Vec3Primitive>,
  b: DistanceField<Vec3Primitive>
): DistanceField<Vec3Primitive> {
  return (point) => {
    return min(a(point), b(point));
  };
}

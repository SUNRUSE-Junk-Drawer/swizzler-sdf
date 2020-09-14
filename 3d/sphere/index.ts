import {
  Expression,
  FloatPrimitive,
  length,
  subtract,
  Vec3Primitive,
} from "swizzler";
import { DistanceField } from "../../distance-field";

export function sphere(
  radius: Expression<FloatPrimitive>
): DistanceField<Vec3Primitive> {
  return (point) => subtract(length(point), radius);
}

import {
  Expression,
  FloatPrimitive,
  length,
  subtract,
  Vec2Primitive,
} from "swizzler";
import { DistanceField } from "../../distance-field";

export function circle(
  radius: Expression<FloatPrimitive>
): DistanceField<Vec2Primitive> {
  return (point) => subtract(length(point), radius);
}

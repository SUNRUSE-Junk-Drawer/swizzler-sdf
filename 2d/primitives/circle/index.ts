import {
  Expression,
  FloatPrimitive,
  length,
  subtract,
  Vec2Primitive,
} from "swizzler";
import { DistanceField } from "../../../distance-field";

/**
 * Creates a circular distance field.
 * @param radius The radius of the circle to create.
 * @returns A circle of the given radius.
 */
export function circle(
  radius: Expression<FloatPrimitive>
): DistanceField<Vec2Primitive> {
  return (point) => subtract(length(point), radius);
}

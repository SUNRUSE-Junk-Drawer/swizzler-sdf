import {
  Expression,
  FloatPrimitive,
  length,
  subtract,
  Vec3Primitive,
} from "swizzler";
import { DistanceField } from "../../../distance-field";

/**
 * Creates a spherical distance field.
 * @param radius The radius of the spherical to create.
 * @returns A spherical of the given radius.
 */
export function sphere(
  radius: Expression<FloatPrimitive>
): DistanceField<Vec3Primitive> {
  return (point) => subtract(length(point), radius);
}

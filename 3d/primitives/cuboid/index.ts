import {
  abs,
  Expression,
  length,
  subtract,
  Vec3Primitive,
  float,
  x,
  y,
  z,
  min,
  max,
  add,
} from "swizzler";
import { DistanceField } from "../../../distance-field";

/**
 * Creates a cuboid distance field.
 * @param size The size of the cuboid to create.  Note that this is equivalent to a radius, not a diameter - the cuboid's dimensions will be double the components of this value.
 * @returns A cuboid distance field of the given size.
 */
export function cuboid(
  size: Expression<Vec3Primitive>
): DistanceField<Vec3Primitive> {
  return (point) => {
    const q = subtract(abs(point), size);

    return add(
      length(max(q, float(0))),
      min(max(x(q), max(y(q), z(q))), float(0))
    );
  };
}

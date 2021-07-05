import {
  abs,
  Expression,
  length,
  subtract,
  Vec2Primitive,
  float,
  x,
  y,
  min,
  max,
  add,
} from "swizzler";
import { DistanceField } from "../../../distance-field";

/**
 * Creates a rectangular distance field.
 * @param size The size of the rectangle to create.  Note that this is equivalent to a radius, not a diameter - the rectangle's dimensions will be double the components of this value.
 * @returns A rectangular distance field of the given size.
 */
export function rectangle(
  size: Expression<Vec2Primitive>
): DistanceField<Vec2Primitive> {
  return (point) => {
    const q = subtract(abs(point), size);

    return add(length(max(q, float(0))), min(max(x(q), y(q)), float(0)));
  };
}

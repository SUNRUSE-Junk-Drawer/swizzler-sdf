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
import { DistanceField } from "../../distance-field";

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

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
import { DistanceField } from "../../distance-field";

export function rectangle(
  size: Expression<Vec2Primitive>
): DistanceField<Vec2Primitive> {
  return (point) => {
    const q = subtract(abs(point), size);

    return add(length(max(q, float(0))), min(max(x(q), y(q)), float(0)));
  };
}

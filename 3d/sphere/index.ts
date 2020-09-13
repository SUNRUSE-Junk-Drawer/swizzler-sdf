import { Expression, FloatPrimitive, length, subtract } from "swizzler";
import { DistanceField3d } from "../distance-field-3d";

export function sphere(radius: Expression<FloatPrimitive>): DistanceField3d {
  return (point) => subtract(length(point), radius);
}

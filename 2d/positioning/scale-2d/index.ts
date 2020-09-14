import {
  multiply,
  divide,
  Expression,
  FloatPrimitive,
  Vec2Primitive,
} from "swizzler";
import { DistanceField } from "../../../distance-field";

export function scale2d(
  by: Expression<FloatPrimitive>,
  distanceField: DistanceField<Vec2Primitive>
): DistanceField<Vec2Primitive> {
  return (point) => {
    return multiply(distanceField(divide(point, by)), by);
  };
}

import {
  multiply,
  divide,
  Expression,
  FloatPrimitive,
  Vec3Primitive,
} from "swizzler";
import { DistanceField } from "../../../distance-field";

export function scale3d(
  by: Expression<FloatPrimitive>,
  distanceField: DistanceField<Vec3Primitive>
): DistanceField<Vec3Primitive> {
  return (point) => {
    return multiply(distanceField(divide(point, by)), by);
  };
}

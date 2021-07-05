import {
  multiply,
  divide,
  Expression,
  FloatPrimitive,
  Vec2Primitive,
} from "swizzler";
import { DistanceField } from "../../../distance-field";

/**
 * Scales a given distance field about the world origin (0) by a given scale factor.
 * @param by The scaling factor to apply, e.g. 2 = 2x the size.
 * @param distanceField The distance field to scale.
 * @returns The given distance field, scaled by the given scaling factor.
 */
export function scale2d(
  by: Expression<FloatPrimitive>,
  distanceField: DistanceField<Vec2Primitive>
): DistanceField<Vec2Primitive> {
  return (point) => {
    return multiply(distanceField(divide(point, by)), by);
  };
}

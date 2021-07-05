import { subtract, Expression, Vec3Primitive } from "swizzler";
import { DistanceField } from "../../../distance-field";

/**
 * Translates a given distance field by a given factor.
 * @param by The translation to apply.
 * @param distanceField The distance field to scale.
 * @returns The given distance field, translated by the given factor.
 */
export function translate3d(
  by: Expression<Vec3Primitive>,
  distanceField: DistanceField<Vec3Primitive>
): DistanceField<Vec3Primitive> {
  return (point) => {
    return distanceField(subtract(point, by));
  };
}

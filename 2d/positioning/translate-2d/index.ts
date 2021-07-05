import { subtract, Expression, Vec2Primitive } from "swizzler";
import { DistanceField } from "../../../distance-field";

/**
 * Translates a given distance field by a given factor.
 * @param by The translation to apply.
 * @param distanceField The distance field to scale.
 * @returns The given distance field, translated by the given factor.
 */
export function translate2d(
  by: Expression<Vec2Primitive>,
  distanceField: DistanceField<Vec2Primitive>
): DistanceField<Vec2Primitive> {
  return (point) => {
    return distanceField(subtract(point, by));
  };
}

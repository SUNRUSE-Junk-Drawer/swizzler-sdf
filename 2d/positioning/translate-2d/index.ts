import { subtract, Expression, Vec2Primitive } from "swizzler";
import { DistanceField } from "../../../distance-field";

export function translate2d(
  by: Expression<Vec2Primitive>,
  distanceField: DistanceField<Vec2Primitive>
): DistanceField<Vec2Primitive> {
  return (point) => {
    return distanceField(subtract(point, by));
  };
}

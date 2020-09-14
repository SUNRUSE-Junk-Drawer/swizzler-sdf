import { subtract, Expression, Vec3Primitive } from "swizzler";
import { DistanceField } from "../../../distance-field";

export function translate3d(
  by: Expression<Vec3Primitive>,
  distanceField: DistanceField<Vec3Primitive>
): DistanceField<Vec3Primitive> {
  return (point) => {
    return distanceField(subtract(point, by));
  };
}

import { Vec2Primitive, min } from "swizzler";
import { DistanceField } from "../../../distance-field";

/**
 * Combines two given distance fields, producing their CSG union.
 * @param a The first distance field to combine.
 * @param b The second distance field to combine.
 * @returns A distance field describing the CSG union of the given distance fields.
 */
export function union2d(
  a: DistanceField<Vec2Primitive>,
  b: DistanceField<Vec2Primitive>
): DistanceField<Vec2Primitive> {
  return (point) => {
    return min(a(point), b(point));
  };
}

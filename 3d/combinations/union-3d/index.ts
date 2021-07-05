import { Vec3Primitive, min } from "swizzler";
import { DistanceField } from "../../../distance-field";

/**
 * Combines two given distance fields, producing their CSG union.
 * @param a The first distance field to combine.
 * @param b The second distance field to combine.
 * @returns A distance field describing the CSG union of the given distance fields.
 */
export function union3d(
  a: DistanceField<Vec3Primitive>,
  b: DistanceField<Vec3Primitive>
): DistanceField<Vec3Primitive> {
  return (point) => {
    return min(a(point), b(point));
  };
}

import {
  add,
  Expression,
  float,
  normalize,
  subtract,
  vec2,
  Vec2Primitive,
} from "swizzler";
import { DistanceField } from "../../distance-field";

/**
 * Estimates the surface normal of the closest surface to a given point in a given distance field by taking multiple samples.
 * @param point The point of the center from which which to sample.
 * @param sampleDistance The maximum distance over which to perform additional samples as part of the estimation.  Larger values will make the estimation less sensitive to small values.
 * @param distanceField The distance field to sample.
 * @returns The estimated surface normal within the given distance field at the given point.
 */
export function calculateNormal2d(
  point: Expression<Vec2Primitive>,
  sampleDistance: number,
  distanceField: DistanceField<Vec2Primitive>
): Expression<Vec2Primitive> {
  const centerDistance = distanceField(point);

  const xDistance = distanceField(
    add(point, vec2(float(sampleDistance / 2), float(0)))
  );

  const yDistance = distanceField(
    add(point, vec2(float(0), float(sampleDistance / 2)))
  );

  return normalize(subtract(vec2(xDistance, yDistance), centerDistance));
}

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

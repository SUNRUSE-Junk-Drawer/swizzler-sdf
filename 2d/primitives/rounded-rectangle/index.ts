import {
  abs,
  add,
  conditional,
  Expression,
  float,
  greaterThan,
  max,
  min,
  subtract,
  Vec2Primitive,
  vec4,
  Vec4Primitive,
  x,
  xy,
  y,
  yzw,
  zw,
  length,
} from "swizzler";
import { DistanceField } from "../../../distance-field";

export function roundedRectangle(
  size: Expression<Vec2Primitive>,
  borderRadius: Expression<Vec4Primitive>
): DistanceField<Vec2Primitive> {
  return (point: Expression<Vec2Primitive>) => {
    let rearranged = borderRadius;

    rearranged = vec4(
      conditional(
        greaterThan(x(point), float(0)),
        xy(rearranged),
        zw(rearranged)
      ),
      zw(rearranged)
    );

    rearranged = vec4(
      conditional(
        greaterThan(y(point), float(0)),
        x(rearranged),
        y(rearranged)
      ),
      yzw(rearranged)
    );

    const q = add(subtract(abs(point), size), x(rearranged));

    return subtract(
      add(min(max(x(q), y(q)), float(0)), length(max(q, float(0)))),
      x(rearranged)
    );
  };
}

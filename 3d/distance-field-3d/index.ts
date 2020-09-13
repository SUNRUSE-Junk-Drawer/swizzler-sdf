import { Expression, FloatPrimitive, Vec3Primitive } from "swizzler";

export type DistanceField3d = (
  point: Expression<Vec3Primitive>
) => Expression<FloatPrimitive>;

import {
  Expression,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
} from "swizzler";

export type DistanceField<T extends Vec2Primitive | Vec3Primitive> = (
  point: Expression<T>
) => Expression<FloatPrimitive>;

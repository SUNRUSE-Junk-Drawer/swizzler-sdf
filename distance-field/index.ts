import {
  Expression,
  FloatPrimitive,
  Vec2Primitive,
  Vec3Primitive,
} from "swizzler";

/**
 * An expression representing a distance field.
 * @template T The floating point type used to represent a point in space, e.g. Vec2Primitive = 2D, Vec3Primitive = 3D.
 * @param point The point from which to sample.
 * @returns The distance to the nearest surface.
 */
export type DistanceField<T extends Vec2Primitive | Vec3Primitive> = (
  point: Expression<T>
) => Expression<FloatPrimitive>;

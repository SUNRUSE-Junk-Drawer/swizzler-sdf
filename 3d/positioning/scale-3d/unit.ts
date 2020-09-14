import { float, vec3 } from "swizzler";
import { cuboid, scale3d } from "../../..";
import { prepare3d } from "../../../distance-field/unit";

describe("scale3d", () => {
  const scenario = prepare3d(
    scale3d(float(12), cuboid(vec3(float(5), float(2), float(3))))
  );

  scenario("x+", 60.5, 19, -14, 0.5);
  scenario("x-", -60.5, 19, -14, 0.5);
  scenario("y+", 8, 24.5, -14, 0.5);
  scenario("y-", 8, -24.5, -14, 0.5);
  scenario("z+", 8, 19, 36.5, 0.5);
  scenario("z-", 8, 19, -36.5, 0.5);
});

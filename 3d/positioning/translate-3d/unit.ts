import { float, vec3 } from "swizzler";
import { cuboid, translate3d } from "../../..";
import { prepare3d } from "../../../distance-field/unit";

describe("translate3d", () => {
  const scenario = prepare3d(
    translate3d(
      vec3(float(12), float(18), float(-7)),
      cuboid(vec3(float(5), float(2), float(3)))
    )
  );

  scenario("x+", 17.5, 19, -8.5, 0.5);
  scenario("x-", 6.5, 19, -8.5, 0.5);
  scenario("y+", 8, 20.5, -8.5, 0.5);
  scenario("y-", 8, 15.5, -8.5, 0.5);
  scenario("z+", 8, 19, -3.5, 0.5);
  scenario("z-", 8, 19, -10.5, 0.5);
});

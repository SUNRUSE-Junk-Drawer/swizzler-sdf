import { float } from "swizzler";
import { sphere } from "../../..";
import { prepare3d } from "../../../distance-field/unit";

describe("sphere", () => {
  const scenario = prepare3d(sphere(float(3)));

  scenario("origin", 0, 0, 0, -3);
  scenario("inside", -2.40553, 1.60416, -0.223877, -0.1);
  scenario("outside", -2.57143, 1.71479, -0.239317, 0.1);
});

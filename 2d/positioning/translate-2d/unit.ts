import { float, vec2 } from "swizzler";
import { rectangle, translate2d } from "../../..";
import { prepare2d } from "../../../distance-field/unit";

describe("translate2d", () => {
  const scenario = prepare2d(
    translate2d(vec2(float(12), float(18)), rectangle(vec2(float(5), float(2))))
  );

  scenario("x+", 17.5, 19, 0.5);
  scenario("x-", 6.5, 19, 0.5);
  scenario("y+", 8, 20.5, 0.5);
  scenario("y-", 8, 15.5, 0.5);
});

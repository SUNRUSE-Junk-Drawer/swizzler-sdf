import { float, vec2 } from "swizzler";
import { rectangle, scale2d } from "../../..";
import { prepare2d } from "../../../distance-field/unit";

describe(`scale2d`, () => {
  const scenario = prepare2d(
    scale2d(float(12), rectangle(vec2(float(5), float(2))))
  );

  scenario(`x+`, 60.5, 19, 0.5);
  scenario(`x-`, -60.5, 19, 0.5);
  scenario(`y+`, 8, 24.5, 0.5);
  scenario(`y-`, 8, -24.5, 0.5);
});

import { float, vec2, vec4 } from "swizzler";
import { roundedRectangle } from "../../..";
import { prepare2d } from "../../../distance-field/unit";

describe(`roundedRectangle`, () => {
  const scenario = prepare2d(
    roundedRectangle(
      vec2(float(24), float(14)),
      vec4(float(4), float(8), float(2), float(3))
    )
  );

  scenario(`origin`, 0, 0, -14);

  scenario(`corner origin x+ y+`, 20, 10, -4);
  scenario(`corner origin x+ y-`, 16, -6, -8);
  scenario(`corner origin x- y+`, -22, 12, -2);
  scenario(`corner origin x- y-`, 20, 10, -4);

  scenario(`below corner x+ y+`, 23.3349, 11.0623, -0.5);
  scenario(`surface corner x+ y+`, 23.8113, 11.214, 0);
  scenario(`above corner x+ y+`, 24.2877, 11.3658, 0.5);

  scenario(`below corner x+ y-`, 17.8093, -13.2785, -0.5);
  scenario(`surface corner x+ y-`, 17.9299, -13.7637, 0);
  scenario(`above corner x+ y-`, 18.0505, -14.2489, 0.5);

  scenario(`below corner x- y+`, -22.5671, 13.3887, -0.5);
  scenario(`surface corner x- y+`, -22.7561, 13.8516, 0);
  scenario(`above corner x- y+`, -22.9452, 14.3144, 0.5);

  scenario(`below corner x- y-`, -23.1762, -12.2305, -0.5);
  scenario(`surface corner x- y-`, -23.6114, -12.4766, 0);
  scenario(`above corner x- y-`, -24.0466, -12.7227, 0.5);

  scenario(`below edge x+`, 23.5, 4, -0.5);
  scenario(`surface edge x+`, 24, 4, 0);
  scenario(`above edge x+`, 24.5, 4, 0.5);

  scenario(`below edge x-`, -23.5, 4, -0.5);
  scenario(`surface edge x-`, -24, 4, 0);
  scenario(`above edge x-`, -24.5, 4, 0.5);

  scenario(`below edge y+`, 4, 13.5, -0.5);
  scenario(`surface edge y+`, 4, 14, 0);
  scenario(`above edge y+`, 4, 14.5, 0.5);

  scenario(`below edge y-`, 4, -13.5, -0.5);
  scenario(`surface edge y-`, 4, -14, 0);
  scenario(`above edge y-`, 4, -14.5, 0.5);

  scenario(`below edge x+ near corner y+`, 23.5, 9, -0.5);
  scenario(`surface edge x+ near corner y+`, 24, 9, 0);
  scenario(`above edge x+ near corner y+`, 24.5, 9, 0.5);

  scenario(`below edge x+ near corner y-`, 23.5, -5, -0.5);
  scenario(`surface edge x+ near corner y-`, 24, -5, 0);
  scenario(`above edge x+ near corner y-`, 24.5, -5, 0.5);

  scenario(`below edge x- near corner y+`, -23.5, 11, -0.5);
  scenario(`surface edge x- near corner y+`, -24, 11, 0);
  scenario(`above edge x- near corner y+`, -24.5, 11, 0.5);

  scenario(`below edge x- near corner y-`, -23.5, -10, -0.5);
  scenario(`surface edge x- near corner y-`, -24, -10, 0);
  scenario(`above edge x- near corner y-`, -24.5, -10, 0.5);

  scenario(`below edge y+ near corner x+`, 19, 13.5, -0.5);
  scenario(`surface edge y+ near corner x+`, 19, 14, 0);
  scenario(`above edge y+ near corner x+`, 19, 14.5, 0.5);

  scenario(`below edge y+ near corner x-`, -21, 13.5, -0.5);
  scenario(`surface edge y+ near corner x-`, -21, 14, 0);
  scenario(`above edge y+ near corner x-`, -21, 14.5, 0.5);

  scenario(`below edge y- near corner x+`, 15, -13.5, -0.5);
  scenario(`surface edge y- near corner x+`, 15, -14, 0);
  scenario(`above edge y- near corner x+`, 15, -14.5, 0.5);

  scenario(`below edge y- near corner x-`, -20, -13.5, -0.5);
  scenario(`surface edge y- near corner x-`, -20, -14, 0);
  scenario(`above edge y- near corner x-`, -20, -14.5, 0.5);
});

import { float, vec3 } from "swizzler";
import { union3d, cuboid } from "../../..";
import { prepare3d } from "../../../distance-field/unit";
import { translate3d } from "../../positioning/translate-3d";

describe(`union3d`, () => {
  const scenario = prepare3d(
    union3d(
      translate3d(
        vec3(float(10), float(15), float(42)),
        cuboid(vec3(float(8), float(6), float(17)))
      ),
      translate3d(
        vec3(float(32), float(13), float(32)),
        cuboid(vec3(float(4), float(10), float(52)))
      )
    )
  );

  scenario(`closest to first`, 18.5, 14, 40, 0.5);
  scenario(`closest to second`, 27.5, 14, 34, 0.5);
});

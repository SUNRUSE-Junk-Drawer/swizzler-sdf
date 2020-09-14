import { float, vec2 } from "swizzler";
import { union2d, rectangle } from "../../..";
import { prepare2d } from "../../../distance-field/unit";
import { translate2d } from "../../positioning/translate-2d";

describe("union2d", () => {
  const scenario = prepare2d(
    union2d(
      translate2d(
        vec2(float(10), float(15)),
        rectangle(vec2(float(8), float(6)))
      ),
      translate2d(
        vec2(float(32), float(13)),
        rectangle(vec2(float(4), float(10)))
      )
    )
  );

  scenario("closest to first", 18.5, 14, 0.5);
  scenario("closest to second", 27.5, 14, 0.5);
});

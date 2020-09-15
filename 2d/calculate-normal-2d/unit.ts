import { compileJavascript, float, vec2, Vec2Primitive, vec4 } from "swizzler";
import {
  roundedRectangle,
  translate2d,
  DistanceField,
  calculateNormal2d,
} from "../..";

describe("calculateNormal2d", () => {
  let distanceField: DistanceField<Vec2Primitive>;

  beforeAll(() => {
    distanceField = translate2d(
      vec2(float(100), float(-50)),
      roundedRectangle(
        vec2(float(24), float(14)),
        vec4(float(4), float(8), float(2), float(3))
      )
    );
  });

  function scenario(
    description: string,
    x: number,
    y: number,
    normalX: number,
    normalY: number
  ): void {
    it(description, () => {
      const result = new Function(
        compileJavascript(
          "return ",
          calculateNormal2d(vec2(float(x), float(y)), 0.0001, distanceField)
        )
      )();

      expect(result[0]).toBeCloseTo(normalX);
      expect(result[1]).toBeCloseTo(normalY);
    });
  }

  scenario("below corner x+ y+", 123.3349, -38.9377, 0.9528, 0.3035);
  scenario("surface corner x+ y+", 123.8113, -38.786, 0.9528, 0.3035);
  scenario("above corner x+ y+", 124.2877, -38.6342, 0.9528, 0.3035);

  scenario("below corner x+ y-", 117.8093, -63.2785, 0.2412, -0.97046);
  scenario("surface corner x+ y-", 117.9299, -63.7637, 0.2412, -0.97046);
  scenario("above corner x+ y-", 118.0505, -64.2489, 0.2412, -0.97046);

  scenario("below corner x- y+", 77.4329, -36.6113, -0.378, 0.9258);
  scenario("surface corner x- y+", 77.2439, -36.1484, -0.378, 0.9258);
  scenario("above corner x- y+", 77.0548, -35.6856, -0.378, 0.9258);

  scenario("below corner x- y-", 76.8238, -62.2305, -0.8704, -0.4922);
  scenario("surface corner x- y-", 76.3886, -62.4766, -0.8704, -0.4922);
  scenario("above corner x- y-", 75.9534, -62.7227, -0.8704, -0.4922);

  scenario("below edge x+", 123.5, -46, 1, 0);
  scenario("surface edge x+", 124, -46, 1, 0);
  scenario("above edge x+", 124.5, -46, 1, 0);

  scenario("below edge x-", -75.5, -46, -1, 0);
  scenario("surface edge x-", -76, -46, -1, 0);
  scenario("above edge x-", -76.5, -46, -1, 0);

  scenario("below edge y+", 104, -36.5, 0, 1);
  scenario("surface edge y+", 104, -36, 0, 1);
  scenario("above edge y+", 104, -35.5, 0, 1);

  scenario("below edge y-", 104, -63.5, 0, -1);
  scenario("surface edge y-", 104, -64, 0, -1);
  scenario("above edge y-", 104, -64.5, 0, -1);

  scenario("below edge x+ near corner y+", 123.5, -41, 1, 0);
  scenario("surface edge x+ near corner y+", 124, -41, 1, 0);
  scenario("above edge x+ near corner y+", 124.5, -41, 1, 0);

  scenario("below edge x+ near corner y-", 123.5, -55, 1, 0);
  scenario("surface edge x+ near corner y-", 124, -55, 1, 0);
  scenario("above edge x+ near corner y-", 124.5, -55, 1, 0);

  scenario("below edge x- near corner y+", 76.5, -39, -1, 0);
  scenario("surface edge x- near corner y+", 76, -39, -1, 0);
  scenario("above edge x- near corner y+", 75.5, -39, -1, 0);

  scenario("below edge x- near corner y-", 76.5, -60, -1, 0);
  scenario("surface edge x- near corner y-", 76, -60, -1, 0);
  scenario("above edge x- near corner y-", 75.5, -60, -1, 0);

  scenario("below edge y+ near corner x+", 119, -36.5, 0, 1);
  scenario("surface edge y+ near corner x+", 119, -36, 0, 1);
  scenario("above edge y+ near corner x+", 119, -35.5, 0, 1);

  scenario("below edge y+ near corner x-", 79, -36.5, 0, 1);
  scenario("surface edge y+ near corner x-", 79, -36, 0, 1);
  scenario("above edge y+ near corner x-", 79, -37.5, 0, 1);

  scenario("below edge y- near corner x+", 115, -63.5, 0, -1);
  scenario("surface edge y- near corner x+", 115, -64, 0, -1);
  scenario("above edge y- near corner x+", 115, -65.5, 0, -1);

  scenario("below edge y- near corner x-", 80, -63.5, 0, -1);
  scenario("surface edge y- near corner x-", 80, -64, 0, -1);
  scenario("above edge y- near corner x-", 80, -64.5, 0, -1);
});

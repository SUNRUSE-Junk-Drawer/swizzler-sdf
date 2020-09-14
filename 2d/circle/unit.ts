import { float } from "swizzler";
import { circle } from "../..";
import { prepare2d } from "../../distance-field/unit";

describe("circle", () => {
  const scenario = prepare2d(circle(float(3)));

  scenario("origin", 0, 0, -3);

  scenario("inside x+ y+", 1.45, 2.51147, -0.1);
  scenario("inside x+ y-", 1.45, -2.51147, -0.1);
  scenario("inside x- y+", -1.45, 2.51147, -0.1);
  scenario("inside x- y-", -1.45, -2.51147, -0.1);

  scenario("surface x+ y+", 1.5, 2.59808, 0);
  scenario("surface x+ y-", 1.5, -2.59808, 0);
  scenario("surface x- y+", -1.5, 2.59808, 0);
  scenario("surface x- y-", -1.5, -2.59808, 0);

  scenario("outside x+ y+", 1.55, 2.68468, 0.1);
  scenario("outside x+ y-", 1.55, -2.68468, 0.1);
  scenario("outside x- y+", -1.55, 2.68468, 0.1);
  scenario("outside x- y-", -1.55, -2.68468, 0.1);
});

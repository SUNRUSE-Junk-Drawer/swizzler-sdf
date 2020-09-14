import { float, vec3 } from "swizzler";
import { cuboid } from "../..";
import { prepare3d } from "../../distance-field/unit";

describe("cuboid", () => {
  const scenario = prepare3d(cuboid(vec3(float(5), float(2), float(3))));

  scenario("origin", 0, 0, 0, -2);
  scenario("inside x+", 4.5, -1, 1.75, -0.5);
  scenario("inside x-", -4.5, -1, 1.75, -0.5);
  scenario("inside y+", -3.4, 1.5, 1.7, -0.5);
  scenario("inside y-", -3.4, -1.5, 1.7, -0.5);
  scenario("inside z+", -3.4, 0.7, 2.5, -0.5);
  scenario("inside z-", -3.4, 0.7, -2.5, -0.5);

  scenario("surface x+", 5, -1, 1.75, 0);
  scenario("surface x-", -5, -1, 1.75, 0);
  scenario("surface y+", -3.4, 2, 1.7, 0);
  scenario("surface y-", -3.4, -2, 1.7, 0);
  scenario("surface z+", -3.4, 0.7, 3, 0);
  scenario("surface z-", -3.4, 0.7, -3, 0);

  scenario("outside x+", 5.5, -1, 1.75, 0.5);
  scenario("outside x-", -5.5, -1, 1.75, 0.5);
  scenario("outside y+", -3.4, 2.5, 1.7, 0.5);
  scenario("outside y-", -3.4, -2.5, 1.7, 0.5);
  scenario("outside z+", -3.4, 0.7, 3.5, 0.5);
  scenario("outside z-", -3.4, 0.7, -3.5, 0.5);

  scenario("edge x+ y+", 5, 2, 0.3, 0);
  scenario("edge x+ y-", 5, -2, 0.3, 0);
  scenario("edge x- y+", -5, 2, 0.3, 0);
  scenario("edge x- y-", -5, -2, 0.3, 0);

  scenario("edge y+ z+", 0.3, 2, 3, 0);
  scenario("edge y+ z-", 0.3, 2, -3, 0);
  scenario("edge y- z+", 0.3, -2, 3, 0);
  scenario("edge y- z-", 0.3, -2, -3, 0);

  scenario("edge x+ z+", 5, 0.3, 3, 0);
  scenario("edge x+ z-", 5, 0.3, -3, 0);
  scenario("edge x- z+", -5, 0.3, 3, 0);
  scenario("edge x- z-", -5, 0.3, -3, 0);

  scenario(
    "edge x+ y+ further on x",
    5.2,
    2.1,
    0.3,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge x+ y+ further on y",
    5.1,
    2.2,
    0.3,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge x+ y- further on x",
    5.2,
    -2.1,
    0.3,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge x+ y- further on y",
    5.1,
    -2.2,
    0.3,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge x- y+ further on x",
    -5.2,
    2.1,
    0.3,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge x- y+ further on y",
    -5.1,
    2.2,
    0.3,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge x- y- further on x",
    -5.2,
    -2.1,
    0.3,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge x- y- further on y",
    -5.1,
    -2.2,
    0.3,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge y+ z+ further on y",
    0.3,
    2.2,
    3.1,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge y+ z+ further on z",
    0.3,
    2.1,
    3.2,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge y+ z- further on y",
    0.3,
    2.2,
    -3.1,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge y+ z- further on z",
    0.3,
    2.1,
    -3.2,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge y- z+ further on y",
    0.3,
    -2.2,
    3.1,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge y- z+ further on z",
    0.3,
    -2.1,
    3.2,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge y- z- further on y",
    0.3,
    -2.2,
    -3.1,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge y- z- further on z",
    0.3,
    -2.1,
    -3.2,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge x+ z+ further on x",
    5.2,
    0.3,
    3.1,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge x+ z+ further on z",
    5.1,
    0.3,
    3.2,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge x+ z- further on x",
    5.2,
    0.3,
    -3.1,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge x+ z- further on z",
    5.1,
    0.3,
    -3.2,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge x- z+ further on x",
    -5.2,
    0.3,
    3.1,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge x- z+ further on z",
    -5.1,
    0.3,
    3.2,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge x- z- further on x",
    -5.2,
    0.3,
    -3.1,
    0.22360679774997896964091736687313
  );

  scenario(
    "edge x- z- further on z",
    -5.1,
    0.3,
    -3.2,
    0.22360679774997896964091736687313
  );
});

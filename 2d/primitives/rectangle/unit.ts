import { float, vec2 } from "swizzler";
import { rectangle } from "../../..";
import { prepare2d } from "../../../distance-field/unit";

describe(`cuboid`, () => {
  const scenario = prepare2d(rectangle(vec2(float(5), float(2))));

  scenario(`origin`, 0, 0, -2);
  scenario(`inside x+`, 4.5, -1, -0.5);
  scenario(`inside x-`, -4.5, -1, -0.5);
  scenario(`inside y+`, -3.4, 1.5, -0.5);
  scenario(`inside y-`, -3.4, -1.5, -0.5);

  scenario(`surface x+`, 5, -1, 0);
  scenario(`surface x-`, -5, -1, 0);
  scenario(`surface y+`, -3.4, 2, 0);
  scenario(`surface y-`, -3.4, -2, 0);

  scenario(`outside x+`, 5.5, -1, 0.5);
  scenario(`outside x-`, -5.5, -1, 0.5);
  scenario(`outside y+`, -3.4, 2.5, 0.5);
  scenario(`outside y-`, -3.4, -2.5, 0.5);

  scenario(`edge x+ y+`, 5, 2, 0);
  scenario(`edge x+ y-`, 5, -2, 0);
  scenario(`edge x- y+`, -5, 2, 0);
  scenario(`edge x- y-`, -5, -2, 0);

  scenario(
    `edge x+ y+ further on x`,
    5.2,
    2.1,
    0.22360679774997896964091736687313
  );

  scenario(
    `edge x+ y+ further on y`,
    5.1,
    2.2,
    0.22360679774997896964091736687313
  );

  scenario(
    `edge x+ y- further on x`,
    5.2,
    -2.1,
    0.22360679774997896964091736687313
  );

  scenario(
    `edge x+ y- further on y`,
    5.1,
    -2.2,
    0.22360679774997896964091736687313
  );

  scenario(
    `edge x- y+ further on x`,
    -5.2,
    2.1,
    0.22360679774997896964091736687313
  );

  scenario(
    `edge x- y+ further on y`,
    -5.1,
    2.2,
    0.22360679774997896964091736687313
  );

  scenario(
    `edge x- y- further on x`,
    -5.2,
    -2.1,
    0.22360679774997896964091736687313
  );

  scenario(
    `edge x- y- further on y`,
    -5.1,
    -2.2,
    0.22360679774997896964091736687313
  );
});

import ROUTES from "../routes/routes";

export const ROUTES_LOOKUP = Object.fromEntries(
  Object.values(ROUTES).map((route) => [route.path, route])
);

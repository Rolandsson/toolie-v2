import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import routes from "./routes";

test("paths exist", () => {
  const paths = ["/home", '/groupie', '/toolie', '/selfie', '/helpie'];
  const mappedRoutes = routes.map(route => route.path);

  expect(mappedRoutes).toEqual(paths);
});
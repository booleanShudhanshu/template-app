import { urls } from "../../urls";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import { Route, Routes, useSearchParams } from "react-router-dom";
import Master from "../master";
const RouteRender = (props: any) => {
  return (
    <Routes>
      {urls.map(({ component, path, identifier, isPrivate }) => {
        return isPrivate ? (
          <Route
            key={identifier}
            path={path}
            element={
              <PrivateRoute>
                <Master identifier={identifier}>{component}</Master>
              </PrivateRoute>
            }
          />
        ) : (
          <Route
            key={identifier}
            path={path}
            element={<PublicRoute>{component}</PublicRoute>}
          />
        );
      })}
    </Routes>
  );
};

export default RouteRender;

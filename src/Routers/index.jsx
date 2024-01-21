import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";

const publicPage = [
  {
    page: <Home />,
    path: "/",
  },
];

function Routers() {
  return (
    <Routes>
      {publicPage.map((item) => {
        return <Route key={item.path} path={item.page} element={item.page} />;
      })}
    </Routes>
  );
}

export default Routers;

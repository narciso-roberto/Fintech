import Header from "../components/Header";
import { Outlet } from "react-router";

const DefaultLayout = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] m-5">
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;

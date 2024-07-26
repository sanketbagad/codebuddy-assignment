import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="min-h-[100dvh] bg-black py-7 text-white">
      <div className="container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;

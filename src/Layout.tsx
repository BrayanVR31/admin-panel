import Navbar from "./Navbar";
import Sidebar from "./sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="flex bg-white">
      <Sidebar />
      <div className="bg-neutral flex-1 ml-w-sidebar-max-span min-h-screen ml-sidebar-max-span">
        <Navbar />
        <div className="min-h-content-peak">
          <button className="btn btn-primary">click</button>
        </div>
      </div>
    </div>
  );
};

export default Layout;

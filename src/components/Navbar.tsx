import {
  Bell,
  Search,
  Moon,
  Sun,
  PanelRight,
  Tally4,
  User,
  Settings,
  LogOut,
  LayoutGrid,
} from "lucide-react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useSidebar, SidebarDrawer } from "@/components/sidebar";

const MobileNavbar = () => {
  return (
    <nav className="min-h-16 px-8 flex items-center justify-between bg-navbar sticky inset-0">
      <SidebarDrawer />
      <button className="btn btn-circle indicator">
        <span className="indicator-item status status-success" />
        <Bell className="w-4.5" />
      </button>
    </nav>
  );
};

const DesktopNavbar = () => {
  const profileUrl =
    "https://external-preview.redd.it/TwdryA_T40CDW6pqOOChOhwkKLUlL3cMsLm7foSCrjw.gif?format=png8&s=50bebd0bb62019ca4507d4197c71508901620156";
  const { setIsCollapsed, isCollapsed } = useSidebar();
  return (
    <nav className="flex bg-navbar border-b border-neutral flex-wrap sticky top-0 right-0 h-navbar-peak">
      <div className="px-8 py-6 flex items-center justify-between flex-1">
        <div className="flex items-center gap-x-6 max-[500px]:hidden">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`btn btn-circle transition-transform duration-500 ${
              isCollapsed ? "btn-primary rotate-0" : "btn-neutral rotate-180"
            }`}
          >
            <PanelRight className="w-4" />
          </button>
          <h2 className="font-extrabold text-2xl">Analitycs</h2>
        </div>
        <div className="flex gap-x-6">
          <label className="input input-md bg-neutral max-[500px]:hidden">
            <Search />
            <input type="search" className="grow" placeholder="Busca aquí" />
            <kbd className="kbd kbd-sm">Ctrl</kbd>
            <kbd className="kbd kbd-sm">f</kbd>
          </label>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-neutral"
            >
              <Bell className="w-4" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-layer rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a className="hover:bg-primary hover:text-white">Link</a>
              </li>
            </ul>
          </div>
          {/** Theme controller option */}
          <label className="swap swap-rotate btn btn-circle btn-neutral">
            <input type="checkbox" className="theme-controller" value="light" />
            <Sun className="swap-off h-4.5 w-4.5 fill-current" />
            <Moon className="swap-on h-4.5 w-4.5 fill-current" />
          </label>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle avatar">
              <div className="w-12 rounded-full">
                <img src={profileUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-layer rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a className="hover:bg-primary hover:text-white">
                  <User className="w-4" />
                  <span>Perfil</span>
                </a>
              </li>
              <li>
                <a className="hover:bg-primary hover:text-white">
                  <Settings className="w-4" />
                  <span>Configuraciones</span>
                </a>
              </li>
              <li>
                <a className="hover:bg-primary hover:text-white">
                  <LogOut className="w-4" />
                  <span>Salir de sesión</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 500px)");
  if (isMobile) return <MobileNavbar />;
  return <DesktopNavbar />;
};

export default Navbar;

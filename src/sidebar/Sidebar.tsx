import { LayoutGrid, Layers } from "lucide-react";
import useMediaQuery from "../hooks/useMediaQuery";
import { menuItems } from "./menuItems";

const DesktopSidebar = () => {
  const profileUrl =
    "https://external-preview.redd.it/TwdryA_T40CDW6pqOOChOhwkKLUlL3cMsLm7foSCrjw.gif?format=png8&s=50bebd0bb62019ca4507d4197c71508901620156";
  return (
    <aside className="w-sidebar-max-span fixed bg-base-100 flex flex-col min-h-screen">
      <div className="flex items-center justify-start w-full h-navbar-peak sticky inset-0 border-b border-base-content">
        <Layers className="text-base-content w-12" />
        <span className="font-semibold">Stockdash</span>
      </div>
      <div className="flex-1 flex flex-col justify-between bg-base-100">
        <ul className="menu w-full">
          {menuItems.map((item) => (
            <li key={item.title}>
              {item.subMenu ? (
                <details open>
                  <summary className="text-base-content hover:bg-gray-400/10">
                    <item.icon className="w-4" />
                    <span>{item.title}</span>
                  </summary>
                  <ul>
                    {item.subMenu.map((subItem) => (
                      <li key={`${item.title}-${subItem.subTitle}`}>
                        <a
                          className="text-base-content hover:bg-gray-400/10"
                          href={subItem.url}
                        >
                          {subItem.subTitle}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <a className="text-base-content hover:bg-gray-400/10">
                  <item.icon className="w-4" />
                  <span>{item.title}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center py-2.5">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src={profileUrl} />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

const MobileSidebar = () => {
  return (
    <aside className="dock bg-neutral-950 text-neutral-content">
      <button className="dock-active">
        <LayoutGrid />
        <span className="dock-label">Dashboard</span>
      </button>
      <button>
        <LayoutGrid />
        <span className="dock-label">Dashboard</span>
      </button>
      <button>
        <LayoutGrid />
        <span className="dock-label">Dashboard</span>
      </button>
      <button>
        <LayoutGrid />
        <span className="dock-label">Dashboard</span>
      </button>
      <button>
        <LayoutGrid />
        <span className="dock-label">Dashboard</span>
      </button>
      <button>
        <LayoutGrid />
        <span className="dock-label">Dashboard</span>
      </button>
    </aside>
  );
};

const Sidebar = () => {
  const isMobile = useMediaQuery("(max-width: 500px)");
  if (isMobile) return <MobileSidebar />;
  return <DesktopSidebar />;
};

export default Sidebar;

import { Layers, LogOut, Menu, User } from "lucide-react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { menuItems } from "./menuItems";
import { useSidebar } from "./SidebarProvider";

const CollapsedMenu = () => {
  const profileUrl =
    "https://external-preview.redd.it/TwdryA_T40CDW6pqOOChOhwkKLUlL3cMsLm7foSCrjw.gif?format=png8&s=50bebd0bb62019ca4507d4197c71508901620156";
  return (
    <>
      {/** Logo */}
      <div className="flex items-center justify-center w-full h-navbar-peak sticky top-0 left-0 border-b border-b-neutral bg-navbar after:content-[''] after:w-2 after:h-full after:bg-navbar after:right-0 after:top-0 after:absolute after:translate-x-1/2">
        <div className="bg-primary w-10 aspect-square flex items-center justify-center rounded-lg flex-wrap">
          <Layers className="w-5" />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between items-center">
        <ul className="menu w-full items-center gap-y-5">
          {menuItems.map((item) => {
            if (item.subMenu) {
              return (
                <li key={item.title} className="dropdown dropdown-right">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-square bg-transparent border-none shadow-none text-gray-400 hover:text-white tooltip tooltip-secondary tooltip-right"
                    data-tip={item.title}
                  >
                    <item.icon className="w-5" />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-neutral rounded-box z-1 w-52 p-2 shadow-lg text-base-content"
                  >
                    {item.subMenu.map((subItem) => (
                      <li>
                        <a
                          className="hover:bg-primary hover:text-white"
                          href={subItem.url}
                        >
                          {subItem.subTitle}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
            return (
              <li key={item.title}>
                <button
                  className="btn btn-square bg-transparent border-none shadow-none text-gray-400 hover:text-white tooltip tooltip-secondary tooltip-right"
                  data-tip={item.title}
                >
                  <item.icon className="w-5 " />
                </button>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center justify-center py-2.5">
          <div className="avatar avatar-online">
            <div className="w-9 h-9 rounded-full ring-primary ring-offset-base-100 ring ring-offset-2">
              <img src={profileUrl} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SingleMenu = () => {
  const profileUrl =
    "https://external-preview.redd.it/TwdryA_T40CDW6pqOOChOhwkKLUlL3cMsLm7foSCrjw.gif?format=png8&s=50bebd0bb62019ca4507d4197c71508901620156";
  return (
    <>
      {/** Logo */}
      <div className="flex items-center justify-start w-full h-navbar-peak sticky top-0 left-0 border-b border-b-neutral px-4 bg-navbar after:content-[''] after:w-2 after:h-full after:bg-navbar after:right-0 after:top-0 after:absolute after:translate-x-1/2">
        <div className="bg-primary w-10 aspect-square flex items-center justify-center rounded-lg flex-wrap mr-2">
          <Layers className="w-5" />
        </div>
        <span className="font-semibold">Stockdash</span>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <ul className="menu w-full">
          {menuItems.map((item) => (
            <li key={item.title}>
              {item.subMenu ? (
                <details open>
                  <summary className="hover:bg-gray-400/10">
                    <item.icon className="w-4" />
                    <span>{item.title}</span>
                  </summary>
                  <ul>
                    {item.subMenu.map((subItem) => (
                      <li key={`${item.title}-${subItem.subTitle}`}>
                        <a className="hover:bg-gray-400/10" href={subItem.url}>
                          {subItem.subTitle}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <a className="hover:bg-gray-400/10">
                  <item.icon className="w-4" />
                  <span>{item.title}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between flex-wrap py-2.5 px-4">
          <div className="flex items-center">
            <div className="avatar mr-3">
              <div className="w-9 h-9 rounded-full">
                <img src={profileUrl} />
              </div>
            </div>
            <p className="flex flex-col">
              <span className="font-semibold text-sm">Username here</span>
              <span className="text-xs">email@gmail.com</span>
            </p>
          </div>
          <LogOut className="w-4.5" />
        </div>
      </div>
    </>
  );
};

const DesktopSidebar = () => {
  const { isCollapsed } = useSidebar();
  return (
    <aside
      style={{
        width: isCollapsed
          ? "var(--spacing-sidebar-min-span)"
          : "var(--spacing-sidebar-max-span)",
      }}
      className="admin-sidebar"
    >
      {isCollapsed ? <CollapsedMenu /> : <SingleMenu />}
    </aside>
  );
};

const Sidebar = () => {
  const isMobile = useMediaQuery("(max-width: 500px)");
  if (isMobile) return null;
  return <DesktopSidebar />;
};

const SidebarDrawer = () => {
  const profileUrl =
    "https://external-preview.redd.it/TwdryA_T40CDW6pqOOChOhwkKLUlL3cMsLm7foSCrjw.gif?format=png8&s=50bebd0bb62019ca4507d4197c71508901620156";
  return (
    <div className="drawer z-50">
      <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="sidebar-drawer"
          className="btn btn-circle drawer-button"
        >
          <Menu className="w-4.5" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="sidebar-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu bg-base-100 text-base-content min-h-full w-[85%]">
          <li className="border-b border-neutral">
            <div className="flex flex-col pb-4">
              <div className="avatar avatar-online">
                <div className="w-28 rounded-full ring-primary ring-offset-base-100 ring ring-offset-2">
                  <img src={profileUrl} />
                </div>
              </div>
              <span className="text-xl font-semibold">Username here</span>
              <span className="text-sm text-gray-500">email@gmail.com</span>
            </div>
          </li>
          {menuItems.map((item) => (
            <li className="mt-4" key={item.title}>
              {item.subMenu ? (
                <details open>
                  <summary className="hover:bg-gray-400/10">
                    <item.icon className="w-4" />
                    <span>{item.title}</span>
                  </summary>
                  <ul>
                    {item.subMenu.map((subItem) => (
                      <li key={`${item.title}-${subItem.subTitle}`}>
                        <a className="hover:bg-gray-400/10" href={subItem.url}>
                          {subItem.subTitle}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <a className="hover:bg-gray-400/10">
                  <item.icon className="w-4" />
                  <span>{item.title}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface DockNavigationProps {
  dockItems?: number;
}

const DockNavigation = ({ dockItems = 2 }: DockNavigationProps) => {
  return (
    <div className="dock dock-xl bg-navbar text-neutral-content">
      {menuItems.slice(0, dockItems).map((item) => (
        <button key={item.title}>
          <item.icon />
          <span className="dock-label">{item.title}</span>
        </button>
      ))}
      <button className="dock-active">
        <User />
        <span className="dock-label">Perfil</span>
      </button>
    </div>
  );
};

export { Sidebar, SidebarDrawer, DockNavigation };

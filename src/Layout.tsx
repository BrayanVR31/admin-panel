import useMediaQuery from "@/hooks/useMediaQuery";
import Navbar from "@/components/Navbar";
import {
  Sidebar,
  SidebarProvider,
  useSidebar,
  DockNavigation,
} from "@/components/sidebar";

const Content = () => {
  const { isCollapsed } = useSidebar();
  const isMobile = useMediaQuery("(max-width: 500px)");
  return (
    <div
      style={{
        marginLeft:
          (isMobile && "0") ||
          `var(--spacing-sidebar-${isCollapsed ? "min" : "max"}-span)`,
      }}
      className="bg-base-100 flex-1 min-h-screen"
    >
      <Navbar />
      {isMobile && <DockNavigation />}
      <div className="min-h-content-peak">
        <div className="px-8 py-6">
          <p>Content</p>
        </div>
      </div>
    </div>
  );
};

const Layout = () => {
  return (
    <SidebarProvider>
      <div className="flex bg-base-100">
        <Sidebar />
        <Content />
      </div>
    </SidebarProvider>
  );
};

export default Layout;

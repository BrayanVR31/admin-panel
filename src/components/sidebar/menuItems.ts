import {
  LucideIcon,
  LayoutGrid,
  PackageOpen,
  Factory,
  HandCoins,
  ShoppingCart,
  Settings,
  Users,
} from "lucide-react";

interface MenuItems {
  title: string;
  icon: LucideIcon;
  subMenu?: {
    subTitle: string;
    url: string;
  }[];
}

export const menuItems: MenuItems[] = [
  {
    title: "Dashboard",
    icon: LayoutGrid,
  },
  {
    title: "Productos",
    icon: PackageOpen,
    subMenu: [
      { subTitle: "Listar", url: "#" },
      { subTitle: "Crear", url: "#" },
    ],
  },
  {
    title: "Proveedores",
    icon: Factory,
    subMenu: [
      { subTitle: "Listar", url: "#" },
      { subTitle: "Crear", url: "#" },
    ],
  },
  {
    title: "Ventas",
    icon: HandCoins,
    subMenu: [
      { subTitle: "Listar", url: "#" },
      { subTitle: "Crear", url: "#" },
    ],
  },
  {
    title: "Compras",
    icon: ShoppingCart,
    subMenu: [
      { subTitle: "Listar", url: "#" },
      { subTitle: "Crear", url: "#" },
    ],
  },
  {
    title: "Usuarios",
    icon: Users,
    subMenu: [
      { subTitle: "Listar", url: "#" },
      { subTitle: "Crear", url: "#" },
    ],
  },
  {
    title: "Configuraciones",
    icon: Settings,
  },
];

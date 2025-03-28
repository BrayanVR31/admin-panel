import { Bell, Search, Menu, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const profileUrl =
    "https://external-preview.redd.it/TwdryA_T40CDW6pqOOChOhwkKLUlL3cMsLm7foSCrjw.gif?format=png8&s=50bebd0bb62019ca4507d4197c71508901620156";
  return (
    <nav className="flex bg-base-100 border-b border-base-content flex-wrap sticky top-0 right-0 h-navbar-peak">
      <div className="px-8 py-6 flex items-center justify-between flex-1">
        <div className="flex items-center gap-x-6">
          <button className="btn btn-circle">
            <Menu className="w-4" />
          </button>
          <h2 className="font-extrabold text-2xl">Analitycs</h2>
        </div>
        <div className="flex gap-x-6">
          <label className="input input-md">
            <Search />
            <input type="search" className="grow" placeholder="Busca aquí" />
            <kbd className="kbd kbd-sm">Ctrl</kbd>
            <kbd className="kbd kbd-sm">f</kbd>
          </label>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle">
              <Bell className="w-4" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Link</a>
              </li>
            </ul>
          </div>
          {/** Theme controller option */}
          <label className="swap swap-rotate btn btn-circle">
            <input type="checkbox" className="theme-controller" value="night" />
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
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Link</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

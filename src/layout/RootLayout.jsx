import { Outlet } from "react-router";
import SideNavBar from "../components/SideNavBar";
import Widgets from "../components/Widgets";
import NavigationBar from "../components/NavigationBar";

function RootLayout() {
  return (
    <>
      <div className="flex flex-col h-screen overflow-y-auto">
        <div className="bg-blue-500 col-start-1 col-end-4 row-start-1 row-end-2">
          <NavigationBar />
        </div>
        <div className="relative bg-gray-100 w-full h-40 mx-auto grow grid sm:grid-cols-[auto_minmax(200px,_1fr)_auto] ">
          <header className="fixed bg-inherit bottom-0 left-0 right-0 z-30 border-solid border-t border-gray-300 sm:sticky sm:top-0 sm:bottom-0 sm:h-full sm:overflow-y-scroll sm:border-r sm:border-t-0 no-scrollbar">
            <SideNavBar />
          </header>

          <main className="h-full overflow-y-auto">
            <Outlet />
          </main>

          <aside className="hidden h-full lg:block no-scrollbar sm:sticky sm:top-0 sm:bottom-0 sm:overflow-y-scroll">
            <Widgets />
          </aside>
        </div>
      </div>
    </>
  );
}

export default RootLayout;

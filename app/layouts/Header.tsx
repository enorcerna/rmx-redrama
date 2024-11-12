import Search from "~/components/header/Search";
import User from "~/components/header/User";
import {SidebarTrigger} from "~/components/ui/sidebar";

function Header() {
  return (
    <header className="h-14 flex items-center border-b p-2 w-full gap-2 justify-between sticky top-0 z-20 backdrop-blur-lg bg-background/90">
      <SidebarTrigger />
      <Search />
      <User />
    </header>
  );
}

export default Header;

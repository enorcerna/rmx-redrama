import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader
} from "~/components/ui/sidebar";
import Logo from "../header/Logo";
import NavCollapsible from "./NavCollapsible";
import {NavType} from "~/types/nav";

interface Props {
  nav: NavType[];
}
export default function AppSidebar({nav}: Props) {
  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <NavCollapsible nav={nav} />
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

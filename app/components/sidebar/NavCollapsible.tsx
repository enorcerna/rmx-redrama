import {NAVS} from "~/constants/main";
import {Collapsible, CollapsibleContent} from "../ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "../ui/sidebar";
import {CollapsibleTrigger} from "@radix-ui/react-collapsible";
import {ChevronRight} from "lucide-react";
import {NavType} from "~/types/nav";
import {Link} from "@remix-run/react";
interface Props {
  nav: NavType[];
}
function NavCollapsible({nav}: Props) {
  return (
    <>
      {nav &&
        nav.map(({title, items, Icon}, i) => (
          <Collapsible
            key={i}
            title={title}
            className="group/collapsible"
            open={title === "Generos" ? true : false}
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <CollapsibleTrigger>
                  <Icon className="mr-2" />
                  {title}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <Link to={item.url}>{item.title}</Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
    </>
  );
}

export default NavCollapsible;

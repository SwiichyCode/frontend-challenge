import { GlobalNavigation } from "@/infrastructure/framework/modules/admin/layouts/navigation/global-navigation";
import { SidebarSettings } from "@/infrastructure/framework/modules/admin/layouts/sidebar/sidebar-settings";

export const SidebarNavigation = () => {
  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            <GlobalNavigation />
          </ul>
        </li>
        <SidebarSettings />
      </ul>
    </nav>
  );
};
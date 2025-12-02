import { AppSidebar } from "@/components/nav/app-sidebar";
import { SiteHeader } from "@/components/nav/site-header";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { auth, signIn, signOut } from "@/lib/auth";

export default async function Home() {
  const session = await auth()

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar user={session?.user} variant="inset" />
      <SidebarInset>
        <SiteHeader />
      </SidebarInset>
    </SidebarProvider> 
  )
}

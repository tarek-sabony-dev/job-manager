import { Button } from "@/components/ui/button";
import { auth, signIn, signOut } from "@/lib/auth";

export default async function Home() {
  const session = await auth()

  return (
    <>
      <form 
        action={async () => {
          "use server"
          await signIn()
        }}
      >
        <Button >
          sign up with google
        </Button>
      </form>
      <form 
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <Button >
          sign out
        </Button>
      </form>
      <Button>
        {session?.user?.email}
      </Button>
    </>
  );
}

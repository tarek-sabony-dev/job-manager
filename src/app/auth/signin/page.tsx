import { Button } from "@/components/ui/button"
import { signIn } from "@/lib/auth"

export default async function Signin() {
  return (
    <>
      <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <Button type="submit">Sign in</Button>
    </form>
    </>
  )
}

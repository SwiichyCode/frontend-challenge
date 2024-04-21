import { getServerAuthSession } from "@/config/server/auth";
import { LogoutButton } from "@/components/ui/logout-button";
import { LoginButton } from "@/components/ui/login-button";
import { CheckoutSessionForm } from "@/modules/payment/components/checkout-session-form";
import { CancelSubscriptionForm } from "@/modules/payment/components/cancel-subscription-form";

export default async function HomePage() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <p>{session?.user.email}</p>
      <LoginButton session={session} />
      <LogoutButton session={session} />
      <CheckoutSessionForm />
      <CancelSubscriptionForm />
    </main>
  );
}

import { requireUser } from "@/lib/auth/require-user";

export default async function DashboardPage() {
  await requireUser();

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      </div>
    </div>
  );
}

import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16 text-foreground">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold text-muted-foreground">404</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">
          Pagina non trovata
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Il link che hai aperto non corrisponde a nessuna pagina del
          dashboard.
        </p>
        <Button asChild className="mt-6">
          <Link href="/">Torna alla dashboard</Link>
        </Button>
      </div>
    </main>
  );
}

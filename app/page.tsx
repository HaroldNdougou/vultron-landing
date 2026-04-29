"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Search, AlertTriangle } from "lucide-react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        company,
        website,
      }),
    });

    setLoading(false);

    alert("Request sent 🚀");
  }

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">

        <div className="inline-flex items-center gap-2 text-sm text-gray-400 border border-gray-800 px-3 py-1 rounded-full mb-6">
          <Shield size={14} />
          External Attack Surface Intelligence
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Detect Cyber Vulnerabilities<br />
          Before Hackers Do
        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
          Vultron scans your public infrastructure like a real attacker and
          reveals exploitable weaknesses in under 48 hours.
        </p>

      </section>

      {/* FORMULAIRE (CONVERSION CORE) */}
      <section className="max-w-xl mx-auto px-6">

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6 space-y-4">

            <h2 className="text-xl font-bold text-center">
              Request Your Security Report
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                className="w-full p-3 bg-black border border-gray-700 rounded"
                required
              />

              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company name"
                className="w-full p-3 bg-black border border-gray-700 rounded"
                required
              />

              <input
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Website URL"
                className="w-full p-3 bg-black border border-gray-700 rounded"
                required
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-red-500 hover:bg-red-600 py-6 text-lg"
              >
                {loading ? "Sending..." : "Get Security Report"}
              </Button>

            </form>

            <p className="text-xs text-gray-500 text-center">
              No installation • No access required • Delivered in 24–48h
            </p>

          </CardContent>
        </Card>

      </section>

      {/* PROBLEM */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">

        <h2 className="text-3xl font-bold">
          Most companies are already exposed without knowing it
        </h2>

        <p className="mt-4 text-gray-400">
          Open ports, forgotten subdomains, misconfigured services —
          attackers see them first.
        </p>

      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6 space-y-2">
            <Search className="text-red-400" />
            <h3 className="font-bold">Attack Surface Scan</h3>
            <p className="text-gray-400 text-sm">
              We map everything exposed on your infrastructure.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6 space-y-2">
            <AlertTriangle className="text-red-400" />
            <h3 className="font-bold">Risk Detection</h3>
            <p className="text-gray-400 text-sm">
              Identify real exploitable vulnerabilities.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6 space-y-2">
            <Shield className="text-red-400" />
            <h3 className="font-bold">Actionable Report</h3>
            <p className="text-gray-400 text-sm">
              Clear fix plan for your dev team.
            </p>
          </CardContent>
        </Card>

      </section>

      {/* CTA FINAL */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">

        <h2 className="text-3xl font-bold">
          Get your exposure report before attackers exploit it
        </h2>

        <p className="text-gray-400 mt-4">
          Delivered in 24–48 hours. No integration required.
        </p>

        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-8 px-8 py-6 text-lg bg-red-500 hover:bg-red-600"
        >
          Start Scan Now
        </Button>

      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-600 py-10 text-sm">
        © Vultron Security Intelligence
      </footer>

    </div>
  );
}
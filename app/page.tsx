"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Search, AlertTriangle, CheckCircle } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Stop Hidden Cyber Attacks Before They Cost You Money
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          We scan your external systems like a hacker and reveal exactly what can be exploited in 24–48 hours.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-6 text-lg">
            Get My Security Report
          </Button>

          <Button variant="outline" className="text-white border-gray-600 px-6 py-6 text-lg">
            See Sample Report
          </Button>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          No installation • No access required • External scan only
        </p>
      </section>

      {/* PROBLEM */}
      <section className="max-w-4xl mx-auto px-6 py-10 text-center">
        <h2 className="text-2xl font-bold">Most companies are already exposed</h2>
        <p className="text-gray-400 mt-4">
          Open ports, leaked services, misconfigurations — attackers see them before you do.
        </p>
      </section>

      {/* VALUE */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <Search className="text-red-400" />
            <h3 className="text-xl font-semibold mt-4">Attack Surface Scan</h3>
            <p className="text-gray-400 mt-2">
              We simulate real attackers and map everything exposed online.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <AlertTriangle className="text-red-400" />
            <h3 className="text-xl font-semibold mt-4">Critical Vulnerabilities</h3>
            <p className="text-gray-400 mt-2">
              We identify what can actually be exploited — not theoretical risks.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <CheckCircle className="text-red-400" />
            <h3 className="text-xl font-semibold mt-4">Fix Plan</h3>
            <p className="text-gray-400 mt-2">
              Step-by-step actions your team can apply immediately.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">How it works</h2>

        <div className="space-y-6 text-center">

          <div>
            <p className="font-semibold">1. External scan</p>
            <p className="text-gray-400">We analyze what attackers can already see.</p>
          </div>

          <div>
            <p className="font-semibold">2. Risk detection</p>
            <p className="text-gray-400">We identify exploitable vulnerabilities.</p>
          </div>

          <div>
            <p className="font-semibold">3. Actionable report</p>
            <p className="text-gray-400">You get a clear fix plan in 24–48h.</p>
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <Card className="bg-red-500 text-white">
          <CardContent className="p-10">
            <Shield className="mx-auto" size={40} />

            <h2 className="text-2xl font-bold mt-4">
              Get your security exposure report before attackers find it
            </h2>

            <p className="mt-2">
              Delivered in 24–48 hours. No setup required.
            </p>

            <Button className="mt-6 bg-black text-white hover:bg-gray-900 px-6 py-5">
              Start Scan
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-600 py-10 text-sm">
        © Vultron Security Intelligence — External Risk Analysis
      </footer>

    </div>
  );
}
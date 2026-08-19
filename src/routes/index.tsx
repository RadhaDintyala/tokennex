import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Challenge } from "@/components/site/Challenge";
import { Lifecycle } from "@/components/site/Lifecycle";
import { Team } from "@/components/site/Team";
import { Connect } from "@/components/site/Connect";
import { Footer } from "@/components/site/Footer";

const title = "TokenNex";
const description =
  "TokenNex understands, optimizes, and preserves the context your AI needs before every request reaches the model. More intelligence per token.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Challenge />
      <Lifecycle />
      <Team />
      <Connect />
      <Footer />
    </main>
  );
}

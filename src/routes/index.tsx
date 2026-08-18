import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import css from "@/summa/site.css?raw";
import bodyHtml from "@/summa/site.body.html?raw";
import js from "@/summa/site.js?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Summa Products — Para fabricantes y dueños de marca" },
      {
        name: "description",
        content:
          "Summa Products: soluciones para fabricantes y dueños de marca, con acompañamiento de principio a fin.",
      },
      { property: "og:title", content: "Summa Products" },
      {
        property: "og:description",
        content:
          "Soluciones para fabricantes y dueños de marca, con acompañamiento de principio a fin.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const s = document.createElement("script");
    s.textContent = `(function(){${js}})();`;
    document.body.appendChild(s);
    return () => {
      s.remove();
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  );
}

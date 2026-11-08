import type { Metadata } from "next";
import "@fontsource/inter/latin-300.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "./globals.css";
import { siteName } from "@/lib/site";
export const metadata: Metadata = {
  title: siteName,
  description:
    "Atenção à saúde dos pés e práticas complementares de bem-estar. Conheça uma proposta de cuidado individualizado em podologia e terapias integrativas.",
  openGraph: {
    title: siteName,
    description: "Cuidado para os seus pés. Atenção para você por inteiro.",
    locale: "pt_BR",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}

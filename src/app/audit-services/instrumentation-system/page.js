import InstrumentationSystem from "./instrumentation_system";

export const metadata = {
  title: "Instrumentation System | JEF UAE",
  description:
    "Professional Instrumentation System services by JEF UAE.",
  keywords:
    "instrumentation system, industrial instrumentation, control systems, electrical systems, JEF UAE",
  alternates: {
    canonical:
      "https://www.jefuae.com/audit-services/instrumentation-system",
  },
  openGraph: {
    url: "https://www.jefuae.com/audit-services/instrumentation-system",
    description:
      "Expert Instrumentation System services by JEF UAE.",
    siteName: "Instrumentation System | JEF UAE",
  },
};

export default function InstrumentationSystemPage() {
  return <InstrumentationSystem />;
}
import CompanyHero from "@/components/company/company-hero";
import Impact from "@/components/company/impact";
import Progress from "@/components/company/progress";

export default function Home() {
  return (
    <main className="w-full h-full max-w-[1720px] mx-auto px-4 py-4 lg:px-12 lg:py-12">
      <CompanyHero />
      <Impact />
      <Progress />
    </main>
  );
}

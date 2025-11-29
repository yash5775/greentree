import { DashboardTemplate } from "@/components/templates/DashboardTemplate";
import { SalesChartWidget } from "@/components/organisms/SalesChartWidget";
import { getAllYearsData } from "@/lib/mockData";

export default function Home() {
  const allData = getAllYearsData();

  return (
    <DashboardTemplate>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {/* Simulating SSR data for 2024 */}
        <SalesChartWidget year={2024} initialData={allData[2024]} />
        {/* Simulating Client-side API fetch for 2023 */}
        <SalesChartWidget year={2023} />
      </div>
      <div className="grid gap-6 md:grid-cols-1">
        {/* Simulating Client-side API fetch for 2022 */}
        <SalesChartWidget year={2022} />
      </div>
    </DashboardTemplate>
  );
}

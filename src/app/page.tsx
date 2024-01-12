import ManageGrowSection from "@/components/ManageGrowSection";
import TrackSalesSection from "@/components/TrackSalesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <ManageGrowSection />
      <TrackSalesSection />
    </div>
  );
}

import AmazonRefundsSection from "@/components/AmazonRefundsSection";
import AmazonSellerAppSection from "@/components/AmazonSellerAppSection";
import ChaChattingSection from "@/components/ChaChattingSection";
import ChatSection from "@/components/ChatSection";
import EmailAutoamtionSection from "@/components/EmailAutomationSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import GlobalDashboardSection from "@/components/GlobalDashboardSection";
import KeywordSection from "@/components/KeywordsSection";
import ManageGrowSection from "@/components/ManageGrowSection";
import MarketPlaceSection from "@/components/MarketPlaceSection";
import Navbar from "@/components/Navabr";
import PlaystoreSection from "@/components/PlaystoreSection";
import PricingSection from "@/components/PricingSection";
import ProductListingSection from "@/components/ProductListingSection";
import TailormadeSolutionSection from "@/components/TailormadeSolutionSection";
import TrackProductIndividually from "@/components/TrackProductIndividuallySection";
import TrackSalesSection from "@/components/TrackSalesSection";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <ManageGrowSection />
      <TrackSalesSection />
      <KeywordSection />
      <EmailAutoamtionSection />
      <AmazonSellerAppSection />
      <GlobalDashboardSection />
      <TrackProductIndividually />
      <ProductListingSection />
      <ChaChattingSection />
      <AmazonRefundsSection />
      <TailormadeSolutionSection />
      <FeaturesSection />
      <PlaystoreSection />
      <MarketPlaceSection />
      <PricingSection />
      <ChatSection />
      <Footer />

    </div>
  );
}

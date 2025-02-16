import Header from "@/components/service/Header";
import RecommendSection from "@/components/service/recommend/RecommendSection";
import ResultSection from "@/components/service/result/ResultSection";
import UploadSection from "@/components/service/upload/UploadSection";

function UploadPage() {
  return (
    <div className="space-y-10">
      <Header />
      <UploadSection />
      <ResultSection />
      <RecommendSection />
    </div>
  );
}

export default UploadPage;

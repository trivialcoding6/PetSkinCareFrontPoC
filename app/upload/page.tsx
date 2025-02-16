import Header from "@/components/service/Header";
import Loading from "@/components/service/Loading";
import RecommendSection from "@/components/service/recommend/RecommendSection";
import ResultSection from "@/components/service/result/ResultSection";
import UploadSection from "@/components/service/upload/UploadSection";

const loading = false;

function UploadPage() {
  return (
    <div className="space-y-10">
      <Header />
      <UploadSection />
      {loading ? (
        <Loading />
      ) : (
        <>
          <ResultSection />
          <RecommendSection />
        </>
      )}
    </div>
  );
}

export default UploadPage;

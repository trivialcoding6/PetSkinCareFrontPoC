"use client";
import Section from "../Section";
import Chart from "./Chart";
import DiseaseInfo from "./DiseaseInfo";
import Loading from "../Loading";
import { usePredictionStore } from "@/store/prediction";

export default function ResultSection() {
  const { predictions, isLoading } = usePredictionStore();
  console.log("predictions", predictions);

  if (isLoading) {
    return <Loading />;
  }

  if (!predictions) {
    return null;
  }

  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
      <Chart predictions={predictions} />
      <DiseaseInfo />
    </Section>
  );
}

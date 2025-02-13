"use client";

import Section from "./Section";
import { MapPin, Phone, ShieldCheck } from "lucide-react";

const hospitals = [
  {
    name: "행복한 동물병원",
    address: "서울시 강남구 대현로 123",
    phone: "02-1234-5678",
  },
  {
    name: "우리 동물병원",
    address: "서울시 강남구 한빛로 456",
    phone: "02-2345-6789",
  },
];

const insurances = [
  {
    name: "펫 케어 보험",
    benefits: ["수술비 최대 1,000만원 보장", "피부염 특약 가능"],
  },
  {
    name: "안심 펫 보험",
    benefits: ["입원비 최대 500만원 보장", "정기 검진 지원"],
  },
];

export default function RecommendationSection() {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
      {/* 주변 동물병원 추천 */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">주변 동물병원</h2>
        <ul className="space-y-4">
          {hospitals.map((hospital, index) => (
            <li key={index} className="p-4 border rounded-lg shadow-sm">
              <h3 className="text-md font-semibold">{hospital.name}</h3>
              <p className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4 text-blue-500" />
                {hospital.address}
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4 text-green-500" />
                {hospital.phone}
              </p>
              <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-md text-sm">
                지도 보러가기
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* 반려동물 보험 추천 */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">반려동물 보험</h2>
        <ul className="space-y-4">
          {insurances.map((insurance, index) => (
            <li key={index} className="p-4 border rounded-lg shadow-sm">
              <h3 className="text-md font-semibold flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-indigo-500" />
                {insurance.name}
              </h3>
              <ul className="mt-2 space-y-1 text-gray-700">
                {insurance.benefits.map((benefit, idx) => (
                  <li key={idx}>- {benefit}</li>
                ))}
              </ul>
              <button className="mt-3 px-4 py-1 bg-indigo-500 text-white rounded-md text-sm">
                상담 신청
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import Section from "./Section";
import { Check } from "lucide-react";

const data = [
  { name: "기미/잡티", percentage: 15 },
  { name: "각질", percentage: 30 },
  { name: "민감성", percentage: 45 },
  { name: "건조", percentage: 77 },
];

export default function ResultSection() {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
      {/* 분석 결과 그래프 */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">분석 결과</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} layout="vertical">
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="name" width={80} />
            <Tooltip />
            <Bar dataKey="percentage" fill="#6366F1" barSize={20}>
              {/* 퍼센트 값 표시 */}
              <LabelList
                dataKey="percentage"
                position="right"
                fill="#333"
                fontSize={12}
                formatter={(value: number) => `${value}%`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 주요 증상 및 상세 정보 */}
      <div className="p-4 ">
        <h2 className="text-lg font-semibold mb-4">주요 증상</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            피부 발진 및 붉은 반점
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            가려움증 동반
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            피부염 확산
          </li>
        </ul>
        <h2 className="text-lg font-semibold mt-6 mb-2">상세 정보</h2>
        <p className="text-gray-600">
          피부 염려증이 의심됩니다. 정확한 진단을 위해 전문의의 상담이
          필요합니다.
        </p>
      </div>
    </Section>
  );
}

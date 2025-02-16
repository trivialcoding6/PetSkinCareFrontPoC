import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data = [
  { name: "기미/잡티", percentage: 15 },
  { name: "각질", percentage: 30 },
  { name: "민감성", percentage: 45 },
  { name: "건조", percentage: 77 },
];

function Chart() {
  return (
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
  );
}

export default Chart;

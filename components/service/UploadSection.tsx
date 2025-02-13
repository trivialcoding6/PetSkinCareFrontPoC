"use client";
import { UploadCloud } from "lucide-react";
import Section from "./Section";
import { Button } from "../ui/button";

function UploadSection() {
  return (
    <Section className="flex flex-col items-center p-6 w-full bg-white gap-6">
      <div className="text-2xl font-bold">반려견 사진을 업로드 해주세요.</div>
      <div className="flex flex-col items-center border-2 border-dashed border-gray-300 rounded-lg p-6 w-[60%]">
        <label className="flex flex-col items-center cursor-pointer w-full">
          <UploadCloud className="w-12 h-12 text-gray-400" />
          <p className="text-gray-500">이미지를 드래그하거나 클릭하여 업로드</p>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={() => {}}
          />
        </label>
      </div>
      <div>
        <Button>Upload</Button>
      </div>
    </Section>
  );
}

export default UploadSection;

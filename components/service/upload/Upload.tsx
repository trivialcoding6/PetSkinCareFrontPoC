"use client";
import { UploadCloud } from "lucide-react";

function Upload() {
  return (
    <div className="flex flex-col items-center border-2 border-dashed border-gray-300 rounded-lg p-6 w-[60%]">
      <div className="flex flex-col items-center cursor-pointer w-full">
        <UploadCloud className="w-12 h-12 text-gray-400" />
        <p className="text-gray-500">이미지를 드래그하거나 클릭하여 업로드</p>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={() => {}}
        />
      </div>
    </div>
  );
}

export default Upload;

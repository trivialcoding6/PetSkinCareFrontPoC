"use client";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { useImageUploadPost } from "@/query/useImageUploadPost";
import { useImageDelete } from "@/query/useImageDelete";

function Upload() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const uploadMutation = useImageUploadPost();
  const deleteMutation = useImageDelete();

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;

      try {
        setIsUploading(true);
        const formData = new FormData();
        formData.append("image", file);

        uploadMutation.mutate(formData, {
          onSuccess: (data) => {
            setPreviewUrl(data.imageUrl);
            toast.success("이미지 업로드에 성공했습니다.");
          },
          onError: (error) => {
            console.error("이미지 업로드 중 오류 발생:", error);
            toast.error("이미지 업로드에 실패했습니다.");
          },
        });
      } catch (error) {
        console.error("이미지 업로드 중 오류 발생:", error);
        toast.error("이미지 업로드에 실패했습니다.");
      } finally {
        setIsUploading(false);
      }
    },
    [uploadMutation]
  );

  const handleReupload = () => {
    if (previewUrl) {
      deleteMutation.mutate(previewUrl, {
        onSuccess: () => {
          setPreviewUrl(null);
          toast.success("이미지가 삭제되었습니다.");
        },
      });
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    multiple: false,
  });

  return (
    <div className="flex flex-col items-center w-[60%]">
      {previewUrl ? (
        <div className="flex flex-col items-center">
          <div className="mt-4">
            <Image
              src={previewUrl}
              alt="업로드된 이미지"
              width={600}
              height={600}
              className="w-auto h-auto object-contain"
              priority
            />
          </div>
          <div className="flex gap-4 mt-4">
            <Button>판별하기</Button>
            <Button variant="outline" onClick={handleReupload}>
              취소
            </Button>
          </div>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`flex flex-col items-center border-2 border-dashed rounded-lg p-6 w-full cursor-pointer
            ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}
            ${isUploading ? "opacity-50 pointer-events-none" : ""}`}
        >
          <input {...getInputProps()} />
          <UploadCloud className="w-12 h-12 text-gray-400" />
          <p className="text-gray-500">
            {isUploading
              ? "업로드 중..."
              : "이미지를 드래그하거나 클릭하여 업로드"}
          </p>
        </div>
      )}
    </div>
  );
}

export default Upload;

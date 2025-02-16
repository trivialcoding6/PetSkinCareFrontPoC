export const uploadImage = async (formData: FormData) => {
  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error);
  }

  return response.json();
};

export const deleteImage = async (imageUrl: string) => {
  const response = await fetch("/api/upload", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imageUrl }),
  });

  if (!response.ok) {
    throw new Error("이미지 삭제 실패");
  }

  return response.json();
};

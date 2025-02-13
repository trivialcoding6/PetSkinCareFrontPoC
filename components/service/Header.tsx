import { Stethoscope } from "lucide-react";

function Header() {
  return (
    <header className="flex items-center gap-2 bg-white p-2">
      <Stethoscope className="w-10 h-10" />
      <span className="text-xl font-bold">반려견 피부질환 진단 서비스</span>
    </header>
  );
}

export default Header;

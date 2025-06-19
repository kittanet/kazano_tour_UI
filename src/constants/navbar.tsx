import { NavbarItem } from "@/types/navbar";

export const navbarItem: NavbarItem[] = [
  { label: "หน้าหลัก", href: "/" },
  {
    label: "แพ็คเกจทัวร์ทั้งหมด",
    // href: "/tours",
    isNotLink: true,
  },
  { label: "บล็อกท่องเที่ยว", href: "/blogs" },
  { label: "ติดต่อเรา", href: "/about" },
  { label: "แชทกับคาซ่า", href: "/chat" },
];

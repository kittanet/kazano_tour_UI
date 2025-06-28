import type { Tour } from "../types/tour";

const tourTrips: Tour[] = [
  {
    id: 1,
    code: "CT-04",
    price: 10990,
    name: "4 ดอยงาน เชียงใหม่",
    image:
      "https://thoongtongtour.com/wp-content/uploads/2020/10/4-%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%A1-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-3-%E0%B8%A7%E0%B8%B1%E0%B8%99-2-%E0%B8%84%E0%B8%B7%E0%B8%99.jpg",
    range: "พฤศจิกายน - มกราคม",
    dateRange: "3 วัน 2 คืน",
    link: "https://www.thoongtongtour.com/wp-content/uploads/2020/10/CT-04-%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%A1@-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-3-%E0%B8%A7%E0%B8%B1%E0%B8%99-2-%E0%B8%84%E0%B8%B7%E0%B8%99.pdf",
  },
  {
    id: 2,
    code: "ZCMI06",
    price: 2999,
    name: "เชียงใหม่ ลำพูน ลำปาง",
    image:
      "https://thoongtongtour.com/wp-content/uploads/2020/10/ZCMI06-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-%E0%B8%A5%E0%B8%B3%E0%B8%9E%E0%B8%B9%E0%B8%99-%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%87.jpg",
    range: "ตุลาคม - ธันวาคม",
    dateRange: "3 วัน 2 คืน",
    link: "https://www.thoongtongtour.com/wp-content/uploads/2020/10/ZCMI06-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-%E0%B8%A5%E0%B8%B3%E0%B8%9E%E0%B8%B9%E0%B8%99-%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%87.pdf",
  },
  {
    id: 3,
    code: "ITHA77",
    price: 9888,
    name: "เชียงใหม่ เชียงราย",
    image:
      "https://thoongtongtour.com/wp-content/uploads/2020/10/ITHA77-ADS.jpg",
    range: "ธันวาคม - กุมภาพันธ์",
    dateRange: "4 วัน 3 คืน",
    link: "https://www.thoongtongtour.com/wp-content/uploads/2020/10/ITHA77-Winter-Lover-%E0%B8%8A%E0%B8%B5%E0%B9%89%E0%B8%9F%E0%B9%89%E0%B8%B2-%E0%B8%8A%E0%B8%B5%E0%B9%89%E0%B8%94%E0%B8%B2%E0%B8%A7-%E0%B8%8A%E0%B8%B5%E0%B9%89%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B8%AD%E0%B8%99-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2-4%E0%B8%A7%E0%B8%B1%E0%B8%99-3%E0%B8%84%E0%B8%B7%E0%B8%99VZ_Dec-Feb21.pdf",
  },
  {
    id: 4,
    code: "ZCMI07",
    price: 8999,
    name: "เชียงใหม่ นอนม่อนแจ่ม 1 คืน",
    image:
      "https://thoongtongtour.com/wp-content/uploads/2020/10/ZCMI07-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-%E0%B8%A1%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%88%E0%B9%88%E0%B8%A1-%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%AA%E0%B8%B8%E0%B9%80%E0%B8%97%E0%B8%9E-%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%84%E0%B8%B3-%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%A1%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%88%E0%B9%88%E0%B8%A1-1-%E0%B8%84%E0%B8%B7%E0%B8%99.jpg",
    range: "พฤศจิกายน - กุมภาพันธ์",
    dateRange: "3 วัน 2 คืน",
    link: "https://www.thoongtongtour.com/wp-content/uploads/2020/10/ZCMI07-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-%E0%B8%A1%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%88%E0%B9%88%E0%B8%A1-%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%AA%E0%B8%B8%E0%B9%80%E0%B8%97%E0%B8%9E-%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%84%E0%B8%B3-%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%A1%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%88%E0%B9%88%E0%B8%A1-1-%E0%B8%84%E0%B8%B7%E0%B8%99.pdf",
  },
  {
    id: 5,
    code: "SHDDCNX1",
    price: 12999,
    name: "เชียงใหม่ ม่อนแจ่ม แม่กำปอง",
    image: "https://thoongtongtour.com/wp-content/uploads/2020/11/SHDDCNX1.jpg",
    range: "ธันวาคม",
    dateRange: "3 วัน 2 คืน",
    link: "https://www.thoongtongtour.com/wp-content/uploads/2020/11/SHDDCNX1-%E0%B8%97%E0%B8%B1%E0%B8%A7%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-%E0%B8%A1%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%88%E0%B9%88%E0%B8%A1-%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%81%E0%B8%B3%E0%B8%9B%E0%B8%AD%E0%B8%87-3-%E0%B8%A7%E0%B8%B1%E0%B8%99-2-%E0%B8%84.pdf",
  },
];

export default tourTrips;

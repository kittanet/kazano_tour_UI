import { image } from "framer-motion/client";
import { link } from "fs";

const tourTrips = [
  {
    id: 1,
    price: "10,990 บาท",
    name: "4 ดอยงาน เชียงใหม่",
    trip_description: "ทริป 3 วัน 2 คืน เชียงใหม่",
    highlight_tour: [
      {
        id: 1,
        location: "ม่อนแจ่ม"
      },
      {
        id: 2,
        location: "ดอยสุเทพ"
      },
      {
        id: 3,
        location: "วัดพระธาตุดอยคำ"
      },
      {
        id: 4,
        location: "ดอยอ่างขาง"
      },
      {
        id: 5,
        location: "ดอยอินทนนท์"
      },
      {
        id: 6,
        location: "ห้วยตึงเฒ่า"
      },
      {
        id: 7,
        location: "ถนนคนเดินเชียงใหม่"
      },
      {
        id: 8,
        location: "ฮิโนกิแลนด์"
      }
    ],
    schedule: [
      {
        id: 1,
        day: 1,
        description: "เดินทางถึงเชียงใหม่ เช็คอินที่พัก - ม่อนแจ่ม - เฮือนโบราณ 60 - พระธาตุดอยคำ - ดอยสุเทพ - ถนนคนเดิน"
      },
      {
        id: 2,
        day: 2,
        description: "ดอยอ่างขาง - สุกี้ยูนาน - ฮิโนกิแลนด์ - สวนอินทผาลัมโกหลัก - วัดบ้านเด่น"
      },
      {
        id: 3,
        day: 3,
        description: "ดอยอินทนนท์ - น้ำตกวชิระธาร - ห้วยตึงเฒ่า - วัดอุโมงค์"
      }
    ],
    image: "https://thoongtongtour.com/wp-content/uploads/2020/10/4-%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%A1-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-3-%E0%B8%A7%E0%B8%B1%E0%B8%99-2-%E0%B8%84%E0%B8%B7%E0%B8%99.jpg",
    range: "พฤศจิกายน - มกราคม",
    dateRange: "3 วัน 2 คืน",
    link: "https://www.thoongtongtour.com/wp-content/uploads/2020/10/CT-04-%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%A1@-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-3-%E0%B8%A7%E0%B8%B1%E0%B8%99-2-%E0%B8%84%E0%B8%B7%E0%B8%99.pdf"
  },
  {
    id: 2,
    price: "2,999 บาท",
    name: "เชียงใหม่ ลำพูน ลำปาง",
    trip_description: "ทริป 3 วัน 2 คืน เชียงใหม่ ลำพูน ลำปาง",
    highlight_tour: [
      {
        id: 1,
        location: "วัดพระธาตุศรีจอมทอง"
      },
      {
        id: 2,
        location: "พระธาตุเจดีย์-วัดพระสิงห์วรวิหาร"
      },
      {
        id: 3,
        location: "พระเจดีย์เจ็ดยอด-วัดเจ็ดยอด"
      },
      {
        id: 4,
        location: "วัดพระธาตุดอยคำ"
      },
      {
        id: 5,
        location: "อนุเสาวรีย์ครูบาศรีวิชัย"
      },
      {
        id: 6,
        location: "วัดพระธาตุดอยสุเทพราชวรวิหาร"
      }
    ],
    schedule: [
      {
        id: 1,
        day: 1,
        description: "เดินทางถึงเชียงใหม่ เช็คอินที่พัก - วัดพระธาตุศรีจอมทอง - พระธาตุเจดีย์-วัดพระสิงห์วรวิหาร - พระเจดีย์เจ็ดยอด-วัดเจ็ดยอด"
      },
      {
        id: 2,
        day: 2,
        description: "วัดพระธาตุดอยคำ - อนุเสาวรีย์ครูบาศรีวิชัย - วัดพระธาตุดอยสุเทพราชวรวิหาร"
      },
      {
        id: 3,
        day: 3,
        description: "ลำพูน - ลำปาง - กลับเชียงใหม่"
      }
    ],
    image: "https://thoongtongtour.com/wp-content/uploads/2020/10/ZCMI06-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-%E0%B8%A5%E0%B8%B3%E0%B8%9E%E0%B8%B9%E0%B8%99-%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%87.jpg",
    range: "ตุลาคม - ธันวาคม",
    dateRange: "3 วัน 2 คืน",
    link: "https://www.thoongtongtour.com/wp-content/uploads/2020/10/ZCMI06-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-%E0%B8%A5%E0%B8%B3%E0%B8%9E%E0%B8%B9%E0%B8%99-%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%87.pdf"
  },
  {
    id: 3,
    price: "9,888 บาท",
    name: "เชียงใหม่ เชียงราย",
    trip_description: "ทริป 4 วัน 3 คืน เชียงใหม่ เชียงราย",
    highlight_tour: [
      {
        id: 1,
        location: "วัดร่องเสือเต้น"
      },
      {
        id: 2,
        location: "วัดร่องขุ่น"
      },
      {
        id: 3,
        location: "สิงห์ปาร์ค"
      },
      {
        id: 4,
        location: "ภูชี้ฟ้า"
      },
      {
        id: 5,
        location: "ภูชี้ดาว"
      },
      {
        id: 6,
        location: "ภูชี้เดือน"
      },
      {
        id: 7,
        location: "ดอยตุง"
      },
      {
        id: 8,
        location: "ไร่ชาฉุยฟง"
      },
      {
        id: 9,
        location: "ฮิโนกิแลนด์"
      },
      {
        id: 10,
        location: "ดอยอ่างขาง"
      },
      {
        id: 11,
        location: "ม่อนแจ่ม"
      },
      {
        id: 12,
        location: "ดอยอินทนนท์"
      }
    ],
    schedule: [
      {
        id: 1,
        day: 1,
        description: "ท่าอากาศยานสุวรรณภูมิเคาน์เตอร์สายการบิน Thai Viet Jet Air ท่าอากาศยานนานาชาติแม่ฟ้าหลวง เชียงราย - วัดห้วยปลากั้ง - วัดร่องเสือเต้น - วัดร่องขุ่น - สิงห์ปาร์ค (นั่งรถรางชมฟาร์ม) - เรียวกังคาเฟ่ - ภูชี้ฟ้า"
      },
      {
        id: 2,
        day: 2,
        description: "ขึ้นยอดภูชี้ฟ้าชมทะเลหมอก - ภูชี้ดาว - ภูชี้เดือน - ดอยตุง - ไร่ชาฉุยฟง - อ.ท่าตอน - วัดท่าตอน - อ.ไชยปราการ - ฮิโนกิแลนด์ - ฝาง"
      },
      {
        id: 3,
        day: 3,
        description: "ดอยอ่างขาง - สถานีเกษตรหลวงดอยอ่างขาง สวนดอกไม้เมืองหนาว สวน 80 - ไร่ชา2000 (ชมซากุระ) - ไร่สตรอเบอร์รี่บ้านนอแล– ดอยม่อนแจ่ม - เมืองเชียงใหม่"
      },
      {
        id: 4,
        day: 4,
        description: "พระธาตุดอยคำ - จอมทอง - ดอยอินทนนท์ - พระมหาธาตุเจดีย์นภเมทนีดล - พระมหาธาตุเจดีย์นภพลภูมิสิริ- ถ่ายรูปป้ายจุดสูงสุดแดนสยาม- ตลาดม้ง- น้ำตกวชิรธาร- บ้านถวาย - ร้านของฝาก - ท่าอากาศยานเชียงใหม่ - ท่าอากาศยานสุวรรณภูมิ"
      }
    ],
    image: "https://thoongtongtour.com/wp-content/uploads/2020/10/ITHA77-ADS.jpg",
    range: "ธันวาคม - กุมภาพันธ์",
    dateRange: "4 วัน 3 คืน",
    link: "https://www.thoongtongtour.com/wp-content/uploads/2020/10/ITHA77-Winter-Lover-%E0%B8%8A%E0%B8%B5%E0%B9%89%E0%B8%9F%E0%B9%89%E0%B8%B2-%E0%B8%8A%E0%B8%B5%E0%B9%89%E0%B8%94%E0%B8%B2%E0%B8%A7-%E0%B8%8A%E0%B8%B5%E0%B9%89%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B8%AD%E0%B8%99-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2-4%E0%B8%A7%E0%B8%B1%E0%B8%993%E0%B8%84%E0%B8%B7%E0%B8%99VZ_Dec-Feb21.pdf"
  },
  {
    id: 4,
    price: "8,999 บาท",
    name: "เชียงใหม่ นอนม่อนแจ่ม 1 คืน",
    trip_description: "ทริป 3 วัน 2 คืน เชียงใหม่ ม่อนแจ่ม",
    highlight_tour: [
      {
        id: 1,
        location: "นอนม่อนแจ่ม"
      },
      {
        id: 2,
        location: "ดอยสุเทพ"
      },
      {
        id: 3,
        location: "ดอยคำ"
      },
      {
        id: 4,
        location: "สวนดอกไม้ไร่ดอกลมหนาว"
      },
      {
        id: 5,
        location: "คาเฟ่ No.39"
      },
      {
        id: 6,
        location: "เจดีย์หลวง"
      },
      {
        id: 7,
        location: "ประตูท่าแพ"
      },
      {
        id: 8,
        location: "นิมมาน"
      }
    ],
    schedule: [
      {
        id: 1,
        day: 1,
        description: "สนามบินสุวรรณภูมิ - สนามบินเชียงใหม่ - คาเฟ่ชม - วัดพระธาตุดอยคำ - ม่อนแจ่ม"
      },
      {
        id: 2,
        day: 2,
        description: "ม่อนแจ่ม - SKY WALK ม่อนแจ่ม - สวนดอกไม้ไร่ดอกลมหนาว - อนุสาวรีย์ครูบาศรีวิชัย - วัดพระธาตุดอยสุเทพราชวรวิหาร - ช้อปปิ้ง วัน นิมมาน"
      },
      {
        id: 3,
        day: 3,
        description: "วัดอุโมงค์ - คาเฟ่ No.39 - วัดโลกโมฬี - ถ่ายรูปประตูท่าแพ - เจดีย์หลวง - ตลาดวโรรส - สนามบินเชียงใหม่ - สนามบินสุวรรณภูมิ"
      }
    ],
    image: "https://thoongtongtour.com/wp-content/uploads/2020/10/ZCMI07-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-%E0%B8%A1%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%88%E0%B9%88%E0%B8%A1-%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%AA%E0%B8%B8%E0%B9%80%E0%B8%97%E0%B8%9E-%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%84%E0%B8%B3-%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%A1%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%88%E0%B9%88%E0%B8%A1-1-%E0%B8%84%E0%B8%B7%E0%B8%99.jpg",
    range: "พฤศจิกายน - กุมภาพันธ์",
    dateRange: "3 วัน 2 คืน",
    link: "https://www.thoongtongtour.com/wp-content/uploads/2020/10/ZCMI07-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-%E0%B8%A1%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%88%E0%B9%88%E0%B8%A1-%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%AA%E0%B8%B8%E0%B9%80%E0%B8%97%E0%B8%9E-%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%84%E0%B8%B3-%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%A1%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%88%E0%B9%88%E0%B8%A1-1-%E0%B8%84%E0%B8%B7%E0%B8%99.pdf"
  },
  {
    id: 5,
    price: "12,999 บาท",
    name: "เชียงใหม่ ม่อนแจ่ม แม่กำปอง",
    trip_description: "ทริป 3 วัน 2 คืน เชียงใหม่ ม่อนแจ่ม แม่กำปอง",
    highlight_tour: [
      {
        id: 1,
        location: "พิชิตยอดดอยอินทนนท์"
      },
      {
        id: 2,
        location: "ผาช่อ"
      },
      {
        id: 3,
        location: "ม่อนแจ่ม"
      },
      {
        id: 4,
        location: "โครงการหนองหอย"
      },
      {
        id: 5,
        location: "ห้วยตึงเฒ่า (คิงคองยักษ์)"
      },
      {
        id: 6,
        location: "ทุ่งดอกมากาเร็ต"
      }
    ],
    schedule: [
      {
        id: 1,
        day: 1,
        description: "กรุงเทพฯ - จ.เชียงใหม่ - ดอยอินทนนท์ - พระมหาธาตุนภเมทนีดล - พระมหาธาตุนพภลภูมิสิริ - ผาช่อ"
      },
      {
        id: 2,
        day: 2,
        description: "โครงการหนองหอย - ม่อนแจ่ม - นั่งล้อเลื่อนไม้ (ฟอมูล่าม้ง) - สวนดอกไม้ (ทุ่งดอกมากาเร็ต) - ห้วยตึงเฒ่า (คงคองยักษ์)"
      },
      {
        id: 3,
        day: 3,
        description: "บ่อน้ำพุร้อนสันกำแพง - แม่กำปอง - พระธาตุดอยสุเทพ - พระธาตุดอยคำ - กรุงเทพฯ"
      }
    ],
    image: "https://thoongtongtour.com/wp-content/uploads/2020/11/SHDDCNX1.jpg",
    range: "ธันวาคม",
    dateRange: "3 วัน 2 คืน",
    link: "https://www.thoongtongtour.com/wp-content/uploads/2020/11/SHDDCNX1-%E0%B8%97%E0%B8%B1%E0%B8%A7%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-%E0%B8%A1%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%88%E0%B9%88%E0%B8%A1-%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%81%E0%B8%B3%E0%B8%9B%E0%B8%AD%E0%B8%87-3-%E0%B8%A7%E0%B8%B1%E0%B8%99-2-%E0%B8%84.pdf"
  }
];

export default tourTrips;
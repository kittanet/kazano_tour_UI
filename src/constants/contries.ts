import { Countries } from "@/types/countries";

export const countries: { continent: string; countries: Countries[] }[] = [
  {
    continent: "เอเชีย",
    countries: [
      { name: "ประเทศไทย", code: "TH" },
      { name: "จีน", code: "CN" },
      { name: "ญี่ปุ่น", code: "JP" },
      { name: "เกาหลีใต้", code: "KR" },
      { name: "อินเดีย", code: "IN" },
      { name: "สิงคโปร์", code: "SG" },
      { name: "มาเลเซีย", code: "MY" },
      { name: "ลาว", code: "LA" },
      { name: "เวียดนาม", code: "VN" },
      { name: "ฟิลิปปินส์", code: "PH" },
      { name: "อินโดนีเซีย", code: "ID" },
      { name: "เมียนมา", code: "MM" }
    ]
  },
  {
    continent: "ยุโรป",
    countries: [
      { name: "สหราชอาณาจักร", code: "GB" },
      { name: "เยอรมนี", code: "DE" },
      { name: "ฝรั่งเศส", code: "FR" },
      { name: "อิตาลี", code: "IT" },
      { name: "สเปน", code: "ES" },
      { name: "เนเธอร์แลนด์", code: "NL" },
      { name: "สวิตเซอร์แลนด์", code: "CH" },
      { name: "สวีเดน", code: "SE" },
      { name: "นอร์เวย์", code: "NO" }
    ]
  },
  {
    continent: "อเมริกาเหนือ",
    countries: [
      { name: "สหรัฐอเมริกา", code: "US" },
      { name: "แคนาดา", code: "CA" },
      { name: "เม็กซิโก", code: "MX" }
    ]
  },
  {
    continent: "อเมริกาใต้",
    countries: [
      { name: "บราซิล", code: "BR" },
      { name: "อาร์เจนตินา", code: "AR" },
      { name: "ชิลี", code: "CL" },
      { name: "โคลอมเบีย", code: "CO" },
      { name: "เปรู", code: "PE" }
    ]
  },
  {
    continent: "โอเชียเนีย",
    countries: [
      { name: "ออสเตรเลีย", code: "AU" },
      { name: "นิวซีแลนด์", code: "NZ" },
      { name: "ฟิจิ", code: "FJ" }
    ]
  },
  {
    continent: "แอฟริกา",
    countries: [
      { name: "อียิปต์", code: "EG" },
      { name: "แอฟริกาใต้", code: "ZA" },
      { name: "ไนจีเรีย", code: "NG" },
      { name: "เคนยา", code: "KE" },
      { name: "เอธิโอเปีย", code: "ET" }
    ]
  }
];

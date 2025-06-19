import React from "react";
import DefaultLayout from "@/layouts/default";

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "แจกแพลนทริปเที่ยวเชียงใหม่ 3 วัน 3 โซน",
      details: "‘เชียงใหม่’ เมืองที่ใครๆ ต่างอดใจไม่ไหวที่จะต้องแวะไปเช็กอิน",
      date: "June 19, 2025",
      image:
        "https://erdeg5uu5jc.exactdn.com/wp-content/uploads/2023/06/day1-768x512.jpg?strip=all&lossy=1&ssl=1",
    },
    {
      id: 2,
      title: "รีวิวเที่ยวเชียงใหม่ 3 วัน 2 คืนแบบฉบับคนงบน้อยก็เที่ยวได้",
      details:
        "สวัสดีค่ะเพื่อนๆ จะมาแบ่งปันการเที่ยวทริปสั้นๆแบบฉบับคนมีวันลาพักร้อนน้อย มีเวลาจำกัด แต่อยากหาเวลาไปเที่ยวพักผ่อนต่างจังหวัด อยากพักกาย พักใจ ให้ธรรมชาติบำบัดใจ เราไปกับแฟนสองคน ซึ่งสำหรับตัวเราเองมาเที่ยวเชียงใหม่มาคนเดียว หลายรอบ มากับเพื่อนบ้างครั้ง ก็ยังประทับเชียงใหม่ให้เป็นนับเบอร์วัน ครั้งนี้จะพาไปเที่ยวเชียงใหม่กับทริปสั้นๆ เริ่มจากเราจะเดินทางจาก อำเภอชุมแพ ขอนแก่นไปยังเชียงใหม่ โดยรถทัวร์ บริษัทเพชรประเสริฐทัวร์ รถสีเหลืองที่โดดเด่นนั่งประจำเวลากลลับบ้าน ซึ่งเป็นรถสายยาว จากอีสานสู่เหนือ วิ่งจาก อุบลราชธานีไปยังเชียงใหม่ นั่งรถกันฉ่ำเลย 5555",
      date: "August 23, 2023",
      image:
        "https://img-prod.api-onscene.com/cdn-cgi/image/format=auto,width=1600/https://sls-prod.api-onscene.com/partner_files/trueidintrend/387528/cover_image/s_9592836.jpg",
    },
    {
      id: 3,
      title: "ทริป 3 วัน 2 คืน เที่ยวตัวเมืองเชียงใหม่ เช็คอินที่เที่ยวยอดฮิต",
      details:
        "สวัสดีค่ะเพื่อนๆ ทริปนี้เราจะพาเพื่อนๆ ไปชิลกันที่จังหวัดเชียงใหม่ค่ะ  ไปตะลุยเที่ยวต้อนรับปีกระต่ายกันแบบครบรสจัดเต็ม ทั้งไหว้พระทำบุญ คาเฟ่น่ารัก และ ร้านอร่อยๆ รวมไปถึงสถานที่ท่องเที่ยว และจุดเช็คอินใหม่ๆด้วยค่ะ จะสนุกแค่ไหนไปชิลกันเลยค่ะ ",
      date: "December 19, 2022",
      image:
        "https://www.chillpainai.com/src/wewakeup/scoop/images/49f9a22be660f2957a36bce30c5d9ddbff0fe4b8.jpg",
    },
  ];
  return (
    <DefaultLayout>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <div className="grid grid-cols-1 gap-6">
          {/* Example Blog Post */}
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg shadow bg-white overflow-hidden flex flex-col"
            >
              <div className="flex items-start space-x-4">
                <img src={post.image} className="w-48 h-full object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-gray-600 text-sm">{post.date}</p>
                  <p className="mt-2 text-gray-800">{post.details}</p>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default BlogPage;

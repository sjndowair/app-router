import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  logging: {
    fetches:{
      fullUrl: true,
    }
  },
 images: {

 domains: ['shopping-phinf.pstatic.net'], // 이미지를 가져오는 도메인 추가] }
 }
};

export default nextConfig;

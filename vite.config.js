// Vite의 설정 파일에서 기본 설정 함수를 가져옴
import { defineConfig } from "vite";

// React를 위한 Vite 플러그인 (JSX, Fast Refresh 등 지원)
import react from "@vitejs/plugin-react";

// PWA 기능을 추가하는 플러그인 (서비스 워커, manifest 등 처리)
import { VitePWA } from "vite-plugin-pwa";

// Vite 설정을 export함
export default defineConfig({
  plugins: [
    // React 플러그인 활성화
    react(),

    // PWA 플러그인 설정
    VitePWA({
      // 서비스워커 자동 업데이트 (앱 변경 시 사용자 새로고침 없이 최신 반영)
      registerType: "autoUpdate",

      // 앱의 기본 정보: 웹 앱 설치를 위한 manifest 설정
      manifest: {
        name: "ST4R App", // 전체 앱 이름 (앱 설치 시 표시됨)
        short_name: "ST4R", // 아이콘 아래 짧은 이름
        start_url: "/", // 앱 시작 시 열리는 경로
        display: "standalone", // 브라우저 UI 없이 독립 앱처럼 실행
        background_color: "#ffffff", // 로딩 시 배경색
        theme_color: "#4f46e5", // 브라우저 상단 색상 (앱 테마 색상)

        // 앱 아이콘 (홈화면 설치 시 사용됨)
        icons: [
          {
            src: "pwa-192x192.png", // 192x192 아이콘 경로 (public 폴더에 위치해야 함)
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png", // 512x512 아이콘 경로
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});

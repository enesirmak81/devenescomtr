import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Sunucu giriş dosyasını Lovable yapısına göre yönlendiriyoruz
    server: { entry: "server" },
  },
  // Sistemin hata vermemesi için aradığı bos eklenti dizisini buraya ekliyoruz
  vite: {
    plugins: [],
    nitro: {
      preset: "vercel" // Eğer vercel'e döneceksen kalabilir, cloudflare için gerekirse sistem kendi ezer
    }
  }
});

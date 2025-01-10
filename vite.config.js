import { defineConfig } from "vite";

export default defineConfig({
  base: "/js-hw-12/", // GitHub Pages base URL
  root: "src", // Установите корневую папку
  build: {
    outDir: "../dist", // Директория для сборки
    emptyOutDir: true, // Очистка директории перед сборкой
    sourcemap: true, // Включить sourcemap для отладки
    rollupOptions: {
      input: {
        main: "./src/index.html", // Главный HTML-файл
      },
      output: {
        entryFileNames: "[name].js", // Имена JS-файлов
        assetFileNames: "assets/[name]-[hash][extname]", // Имена ассетов
      },
    },
  },
});

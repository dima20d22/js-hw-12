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
        main: "./src/main.js", // Укажите ваш файл
        file1: "./src/js/pixabay-api.js", // Укажите ваш файл
        file2: "./src/js/render-function.js", // Укажите ваш файл
        file3: "./src/js/tryAndCatch.js", // Укажите ваш файл
      },
      output: {
        entryFileNames: "[name].js", // Название итогового файла
      },
    },
  },
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: 
  [
    react(),
    federation({
      name: "mfe3",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      shared: ["react", "react-dom"]
    })
  ],
  server: {
    port: 3001, 
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },

  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    outDir: "dist",
    assetsDir: "", // Isso evita que o remoteEntry.js vá para a pasta assets
  },  
})


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/", // Ensures proper paths for static assets in production
    server: {
        port: 3000,
        host: "0.0.0.0",
        logLevel: "silent",
        client: {
            logging: "none",
        },
        assetsInclude: ["**/*.ttf", "**/*.png"],
    },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@api": "/src/api",
			"@assets": "/src/assets",
			"@components": "/src/components",
			"@styles": "/src/styles",
			"@views": "/src/views",
		},
	},
});

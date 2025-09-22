declare module "vite-plugin-eslint" {
  import { Plugin } from "vite";
  function eslintPlugin(options?: unknown): Plugin;
  export default eslintPlugin;
}

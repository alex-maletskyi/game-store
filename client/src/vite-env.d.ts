/// <reference types="vite/client" />

// --- Declaration fof what .module.css file is
//needs to import styles to .ts files
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
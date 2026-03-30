/// <reference types="vite/client" />

interface Window {
  turnstile: {
    render: (element: HTMLElement, options: any) => string;
    reset: (id: string) => void;
    remove: (id: string) => void;
  };
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

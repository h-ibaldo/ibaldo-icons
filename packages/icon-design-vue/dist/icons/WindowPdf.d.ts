import type { DefineComponent } from 'vue';

export interface WindowPdfProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowPdf: DefineComponent<WindowPdfProps>;

export default WindowPdf;
export { WindowPdf };

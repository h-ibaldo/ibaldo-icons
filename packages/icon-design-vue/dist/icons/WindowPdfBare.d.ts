import type { DefineComponent } from 'vue';

export interface WindowPdfBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WindowPdfBare: DefineComponent<WindowPdfBareProps>;

export default WindowPdfBare;
export { WindowPdfBare };

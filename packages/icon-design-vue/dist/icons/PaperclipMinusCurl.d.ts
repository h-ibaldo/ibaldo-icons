import type { DefineComponent } from 'vue';

export interface PaperclipMinusCurlProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipMinusCurl: DefineComponent<PaperclipMinusCurlProps>;

export default PaperclipMinusCurl;
export { PaperclipMinusCurl };

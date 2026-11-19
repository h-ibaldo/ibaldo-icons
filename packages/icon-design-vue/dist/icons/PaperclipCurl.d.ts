import type { DefineComponent } from 'vue';

export interface PaperclipCurlProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipCurl: DefineComponent<PaperclipCurlProps>;

export default PaperclipCurl;
export { PaperclipCurl };

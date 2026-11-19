import type { DefineComponent } from 'vue';

export interface PaperclipXCurlProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipXCurl: DefineComponent<PaperclipXCurlProps>;

export default PaperclipXCurl;
export { PaperclipXCurl };

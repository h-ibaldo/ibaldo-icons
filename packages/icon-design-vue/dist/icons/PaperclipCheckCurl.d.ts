import type { DefineComponent } from 'vue';

export interface PaperclipCheckCurlProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipCheckCurl: DefineComponent<PaperclipCheckCurlProps>;

export default PaperclipCheckCurl;
export { PaperclipCheckCurl };

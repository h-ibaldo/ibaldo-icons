import type { DefineComponent } from 'vue';

export interface PaperclipPlusCurlProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaperclipPlusCurl: DefineComponent<PaperclipPlusCurlProps>;

export default PaperclipPlusCurl;
export { PaperclipPlusCurl };

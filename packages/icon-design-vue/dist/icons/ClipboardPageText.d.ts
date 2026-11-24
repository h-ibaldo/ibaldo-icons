import type { DefineComponent } from 'vue';

export interface ClipboardPageTextProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardPageText: DefineComponent<ClipboardPageTextProps>;

export default ClipboardPageText;
export { ClipboardPageText };

import type { DefineComponent } from 'vue';

export interface ClipboardTextProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardText: DefineComponent<ClipboardTextProps>;

export default ClipboardText;
export { ClipboardText };

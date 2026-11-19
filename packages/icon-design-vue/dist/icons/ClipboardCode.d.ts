import type { DefineComponent } from 'vue';

export interface ClipboardCodeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardCode: DefineComponent<ClipboardCodeProps>;

export default ClipboardCode;
export { ClipboardCode };

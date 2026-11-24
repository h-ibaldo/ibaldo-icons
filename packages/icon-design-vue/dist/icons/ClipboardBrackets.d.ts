import type { DefineComponent } from 'vue';

export interface ClipboardBracketsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardBrackets: DefineComponent<ClipboardBracketsProps>;

export default ClipboardBrackets;
export { ClipboardBrackets };

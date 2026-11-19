import type { DefineComponent } from 'vue';

export interface ClipboardMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardMinus: DefineComponent<ClipboardMinusProps>;

export default ClipboardMinus;
export { ClipboardMinus };

import type { DefineComponent } from 'vue';

export interface ClipboardMinusCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardMinusCenter: DefineComponent<ClipboardMinusCenterProps>;

export default ClipboardMinusCenter;
export { ClipboardMinusCenter };

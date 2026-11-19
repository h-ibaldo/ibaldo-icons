import type { DefineComponent } from 'vue';

export interface ClipboardPlusCenterProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardPlusCenter: DefineComponent<ClipboardPlusCenterProps>;

export default ClipboardPlusCenter;
export { ClipboardPlusCenter };

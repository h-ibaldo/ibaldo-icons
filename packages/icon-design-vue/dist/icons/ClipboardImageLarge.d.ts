import type { DefineComponent } from 'vue';

export interface ClipboardImageLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardImageLarge: DefineComponent<ClipboardImageLargeProps>;

export default ClipboardImageLarge;
export { ClipboardImageLarge };

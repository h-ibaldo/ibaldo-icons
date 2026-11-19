import type { DefineComponent } from 'vue';

export interface ClipboardImageProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ClipboardImage: DefineComponent<ClipboardImageProps>;

export default ClipboardImage;
export { ClipboardImage };

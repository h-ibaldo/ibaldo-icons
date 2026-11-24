import type { DefineComponent } from 'vue';

export interface GalleryHorizontalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GalleryHorizontal: DefineComponent<GalleryHorizontalProps>;

export default GalleryHorizontal;
export { GalleryHorizontal };

import type { DefineComponent } from 'vue';

export interface GalleryTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GalleryTop: DefineComponent<GalleryTopProps>;

export default GalleryTop;
export { GalleryTop };

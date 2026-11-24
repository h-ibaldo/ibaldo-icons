import type { DefineComponent } from 'vue';

export interface GalleryVerticalProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GalleryVertical: DefineComponent<GalleryVerticalProps>;

export default GalleryVertical;
export { GalleryVertical };

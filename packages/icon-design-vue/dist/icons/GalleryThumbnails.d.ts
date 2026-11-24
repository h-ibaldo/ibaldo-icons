import type { DefineComponent } from 'vue';

export interface GalleryThumbnailsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GalleryThumbnails: DefineComponent<GalleryThumbnailsProps>;

export default GalleryThumbnails;
export { GalleryThumbnails };

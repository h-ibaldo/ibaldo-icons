import type { DefineComponent } from 'vue';

export interface GalleryLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GalleryLeft: DefineComponent<GalleryLeftProps>;

export default GalleryLeft;
export { GalleryLeft };

import type { DefineComponent } from 'vue';

export interface PictureInPictureProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PictureInPicture: DefineComponent<PictureInPictureProps>;

export default PictureInPicture;
export { PictureInPicture };

import type { DefineComponent } from 'vue';

export interface PictureInPictureTopProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PictureInPictureTop: DefineComponent<PictureInPictureTopProps>;

export default PictureInPictureTop;
export { PictureInPictureTop };

import type { DefineComponent } from 'vue';

export interface PictureInPictureXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PictureInPictureX: DefineComponent<PictureInPictureXProps>;

export default PictureInPictureX;
export { PictureInPictureX };

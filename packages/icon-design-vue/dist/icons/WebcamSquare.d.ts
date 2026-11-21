import type { DefineComponent } from 'vue';

export interface WebcamSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WebcamSquare: DefineComponent<WebcamSquareProps>;

export default WebcamSquare;
export { WebcamSquare };

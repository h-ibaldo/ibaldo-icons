import type { DefineComponent } from 'vue';

export interface WebcamOffSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WebcamOffSquare: DefineComponent<WebcamOffSquareProps>;

export default WebcamOffSquare;
export { WebcamOffSquare };

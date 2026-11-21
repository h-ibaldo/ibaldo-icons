import type { DefineComponent } from 'vue';

export interface WebcamProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Webcam: DefineComponent<WebcamProps>;

export default Webcam;
export { Webcam };

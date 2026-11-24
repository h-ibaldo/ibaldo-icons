import type { DefineComponent } from 'vue';

export interface WebcamOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const WebcamOff: DefineComponent<WebcamOffProps>;

export default WebcamOff;
export { WebcamOff };

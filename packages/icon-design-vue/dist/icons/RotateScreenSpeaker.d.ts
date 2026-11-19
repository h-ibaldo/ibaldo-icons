import type { DefineComponent } from 'vue';

export interface RotateScreenSpeakerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const RotateScreenSpeaker: DefineComponent<RotateScreenSpeakerProps>;

export default RotateScreenSpeaker;
export { RotateScreenSpeaker };

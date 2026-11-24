import type { DefineComponent } from 'vue';

export interface MicrophonePlayCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MicrophonePlayCircle: DefineComponent<MicrophonePlayCircleProps>;

export default MicrophonePlayCircle;
export { MicrophonePlayCircle };

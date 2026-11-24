import type { DefineComponent } from 'vue';

export interface MicrophoneOffBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MicrophoneOffBare: DefineComponent<MicrophoneOffBareProps>;

export default MicrophoneOffBare;
export { MicrophoneOffBare };

import type { DefineComponent } from 'vue';

export interface MicrophoneOffProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MicrophoneOff: DefineComponent<MicrophoneOffProps>;

export default MicrophoneOff;
export { MicrophoneOff };

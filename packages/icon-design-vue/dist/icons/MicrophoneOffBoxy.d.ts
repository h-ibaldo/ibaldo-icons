import type { DefineComponent } from 'vue';

export interface MicrophoneOffBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MicrophoneOffBoxy: DefineComponent<MicrophoneOffBoxyProps>;

export default MicrophoneOffBoxy;
export { MicrophoneOffBoxy };

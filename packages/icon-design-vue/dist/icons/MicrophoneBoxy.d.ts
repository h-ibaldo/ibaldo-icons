import type { DefineComponent } from 'vue';

export interface MicrophoneBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MicrophoneBoxy: DefineComponent<MicrophoneBoxyProps>;

export default MicrophoneBoxy;
export { MicrophoneBoxy };

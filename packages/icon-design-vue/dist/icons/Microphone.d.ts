import type { DefineComponent } from 'vue';

export interface MicrophoneProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Microphone: DefineComponent<MicrophoneProps>;

export default Microphone;
export { Microphone };

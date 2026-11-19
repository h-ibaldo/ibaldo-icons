import type { DefineComponent } from 'vue';

export interface MicrophoneBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MicrophoneBare: DefineComponent<MicrophoneBareProps>;

export default MicrophoneBare;
export { MicrophoneBare };

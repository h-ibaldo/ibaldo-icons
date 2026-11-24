import type { DefineComponent } from 'vue';

export interface MicrophoneBanProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MicrophoneBan: DefineComponent<MicrophoneBanProps>;

export default MicrophoneBan;
export { MicrophoneBan };

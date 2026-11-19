import type { DefineComponent } from 'vue';

export interface MicrophoneBanBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MicrophoneBanBare: DefineComponent<MicrophoneBanBareProps>;

export default MicrophoneBanBare;
export { MicrophoneBanBare };

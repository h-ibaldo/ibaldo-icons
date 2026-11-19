import type { DefineComponent } from 'vue';

export interface MicrophoneBanBoxyProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MicrophoneBanBoxy: DefineComponent<MicrophoneBanBoxyProps>;

export default MicrophoneBanBoxy;
export { MicrophoneBanBoxy };

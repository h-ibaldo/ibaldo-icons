import type { DefineComponent } from 'vue';

export interface MicrophoneBanGrilleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MicrophoneBanGrille: DefineComponent<MicrophoneBanGrilleProps>;

export default MicrophoneBanGrille;
export { MicrophoneBanGrille };

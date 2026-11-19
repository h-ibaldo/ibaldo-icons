import type { DefineComponent } from 'vue';

export interface MicrophoneGrilleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MicrophoneGrille: DefineComponent<MicrophoneGrilleProps>;

export default MicrophoneGrille;
export { MicrophoneGrille };

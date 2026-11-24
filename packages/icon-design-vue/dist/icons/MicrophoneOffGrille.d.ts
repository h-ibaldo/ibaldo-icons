import type { DefineComponent } from 'vue';

export interface MicrophoneOffGrilleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MicrophoneOffGrille: DefineComponent<MicrophoneOffGrilleProps>;

export default MicrophoneOffGrille;
export { MicrophoneOffGrille };

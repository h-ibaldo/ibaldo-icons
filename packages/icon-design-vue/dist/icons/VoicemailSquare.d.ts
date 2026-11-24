import type { DefineComponent } from 'vue';

export interface VoicemailSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VoicemailSquare: DefineComponent<VoicemailSquareProps>;

export default VoicemailSquare;
export { VoicemailSquare };

import type { DefineComponent } from 'vue';

export interface VoicemailBarsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VoicemailBars: DefineComponent<VoicemailBarsProps>;

export default VoicemailBars;
export { VoicemailBars };

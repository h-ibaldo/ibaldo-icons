import type { DefineComponent } from 'vue';

export interface VoicemailProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Voicemail: DefineComponent<VoicemailProps>;

export default Voicemail;
export { Voicemail };

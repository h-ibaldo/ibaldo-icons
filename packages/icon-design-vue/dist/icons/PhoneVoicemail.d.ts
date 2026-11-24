import type { DefineComponent } from 'vue';

export interface PhoneVoicemailProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PhoneVoicemail: DefineComponent<PhoneVoicemailProps>;

export default PhoneVoicemail;
export { PhoneVoicemail };

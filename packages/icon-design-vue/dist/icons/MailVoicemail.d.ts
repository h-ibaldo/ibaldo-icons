import type { DefineComponent } from 'vue';

export interface MailVoicemailProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailVoicemail: DefineComponent<MailVoicemailProps>;

export default MailVoicemail;
export { MailVoicemail };

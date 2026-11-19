import type { DefineComponent } from 'vue';

export interface MailboxMailProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailboxMail: DefineComponent<MailboxMailProps>;

export default MailboxMail;
export { MailboxMail };

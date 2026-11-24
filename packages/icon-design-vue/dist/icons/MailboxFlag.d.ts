import type { DefineComponent } from 'vue';

export interface MailboxFlagProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailboxFlag: DefineComponent<MailboxFlagProps>;

export default MailboxFlag;
export { MailboxFlag };

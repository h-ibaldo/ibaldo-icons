import type { DefineComponent } from 'vue';

export interface MailboxFlagBareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailboxFlagBare: DefineComponent<MailboxFlagBareProps>;

export default MailboxFlagBare;
export { MailboxFlagBare };

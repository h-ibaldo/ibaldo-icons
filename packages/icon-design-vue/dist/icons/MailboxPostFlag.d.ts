import type { DefineComponent } from 'vue';

export interface MailboxPostFlagProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailboxPostFlag: DefineComponent<MailboxPostFlagProps>;

export default MailboxPostFlag;
export { MailboxPostFlag };

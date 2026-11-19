import type { DefineComponent } from 'vue';

export interface MailboxProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Mailbox: DefineComponent<MailboxProps>;

export default Mailbox;
export { Mailbox };

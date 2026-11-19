import type { DefineComponent } from 'vue';

export interface MailboxFlagSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailboxFlagSquare: DefineComponent<MailboxFlagSquareProps>;

export default MailboxFlagSquare;
export { MailboxFlagSquare };

import type { DefineComponent } from 'vue';

export interface MailboxPostProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailboxPost: DefineComponent<MailboxPostProps>;

export default MailboxPost;
export { MailboxPost };

import type { DefineComponent } from 'vue';

export interface MailCheckProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailCheck: DefineComponent<MailCheckProps>;

export default MailCheck;
export { MailCheck };

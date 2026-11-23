import type { DefineComponent } from 'vue';

export interface MailDotRoundedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailDotRounded: DefineComponent<MailDotRoundedProps>;

export default MailDotRounded;
export { MailDotRounded };

import type { DefineComponent } from 'vue';

export interface MailMinusRoundedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailMinusRounded: DefineComponent<MailMinusRoundedProps>;

export default MailMinusRounded;
export { MailMinusRounded };

import type { DefineComponent } from 'vue';

export interface MailXRoundedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailXRounded: DefineComponent<MailXRoundedProps>;

export default MailXRounded;
export { MailXRounded };

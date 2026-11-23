import type { DefineComponent } from 'vue';

export interface MailClockRoundedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailClockRounded: DefineComponent<MailClockRoundedProps>;

export default MailClockRounded;
export { MailClockRounded };

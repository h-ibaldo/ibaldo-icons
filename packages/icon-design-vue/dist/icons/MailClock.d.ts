import type { DefineComponent } from 'vue';

export interface MailClockProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailClock: DefineComponent<MailClockProps>;

export default MailClock;
export { MailClock };

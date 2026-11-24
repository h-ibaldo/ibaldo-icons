import type { DefineComponent } from 'vue';

export interface MailCheckRoundedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailCheckRounded: DefineComponent<MailCheckRoundedProps>;

export default MailCheckRounded;
export { MailCheckRounded };

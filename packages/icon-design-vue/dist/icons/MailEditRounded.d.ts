import type { DefineComponent } from 'vue';

export interface MailEditRoundedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailEditRounded: DefineComponent<MailEditRoundedProps>;

export default MailEditRounded;
export { MailEditRounded };

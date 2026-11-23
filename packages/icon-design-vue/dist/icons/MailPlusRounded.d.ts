import type { DefineComponent } from 'vue';

export interface MailPlusRoundedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailPlusRounded: DefineComponent<MailPlusRoundedProps>;

export default MailPlusRounded;
export { MailPlusRounded };

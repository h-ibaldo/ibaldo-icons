import type { DefineComponent } from 'vue';

export interface MailDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailDot: DefineComponent<MailDotProps>;

export default MailDot;
export { MailDot };

import type { DefineComponent } from 'vue';

export interface MailSearchRoundedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailSearchRounded: DefineComponent<MailSearchRoundedProps>;

export default MailSearchRounded;
export { MailSearchRounded };

import type { DefineComponent } from 'vue';

export interface MailMinusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailMinus: DefineComponent<MailMinusProps>;

export default MailMinus;
export { MailMinus };

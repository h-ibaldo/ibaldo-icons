import type { DefineComponent } from 'vue';

export interface MailMinusFoldsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailMinusFolds: DefineComponent<MailMinusFoldsProps>;

export default MailMinusFolds;
export { MailMinusFolds };

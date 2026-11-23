import type { DefineComponent } from 'vue';

export interface MailPlusFoldsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailPlusFolds: DefineComponent<MailPlusFoldsProps>;

export default MailPlusFolds;
export { MailPlusFolds };

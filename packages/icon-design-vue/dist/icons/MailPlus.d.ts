import type { DefineComponent } from 'vue';

export interface MailPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailPlus: DefineComponent<MailPlusProps>;

export default MailPlus;
export { MailPlus };

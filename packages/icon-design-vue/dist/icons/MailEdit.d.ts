import type { DefineComponent } from 'vue';

export interface MailEditProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailEdit: DefineComponent<MailEditProps>;

export default MailEdit;
export { MailEdit };

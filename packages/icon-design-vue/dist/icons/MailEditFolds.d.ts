import type { DefineComponent } from 'vue';

export interface MailEditFoldsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailEditFolds: DefineComponent<MailEditFoldsProps>;

export default MailEditFolds;
export { MailEditFolds };

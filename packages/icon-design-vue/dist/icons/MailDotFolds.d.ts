import type { DefineComponent } from 'vue';

export interface MailDotFoldsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailDotFolds: DefineComponent<MailDotFoldsProps>;

export default MailDotFolds;
export { MailDotFolds };

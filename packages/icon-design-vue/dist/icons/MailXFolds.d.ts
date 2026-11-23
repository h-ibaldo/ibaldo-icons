import type { DefineComponent } from 'vue';

export interface MailXFoldsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailXFolds: DefineComponent<MailXFoldsProps>;

export default MailXFolds;
export { MailXFolds };

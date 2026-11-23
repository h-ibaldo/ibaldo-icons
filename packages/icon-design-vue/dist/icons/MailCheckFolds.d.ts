import type { DefineComponent } from 'vue';

export interface MailCheckFoldsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailCheckFolds: DefineComponent<MailCheckFoldsProps>;

export default MailCheckFolds;
export { MailCheckFolds };

import type { DefineComponent } from 'vue';

export interface MailStackSearchFoldsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailStackSearchFolds: DefineComponent<MailStackSearchFoldsProps>;

export default MailStackSearchFolds;
export { MailStackSearchFolds };

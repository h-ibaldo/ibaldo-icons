import type { DefineComponent } from 'vue';

export interface MailSearchFoldsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailSearchFolds: DefineComponent<MailSearchFoldsProps>;

export default MailSearchFolds;
export { MailSearchFolds };

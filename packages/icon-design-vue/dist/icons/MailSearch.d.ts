import type { DefineComponent } from 'vue';

export interface MailSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailSearch: DefineComponent<MailSearchProps>;

export default MailSearch;
export { MailSearch };

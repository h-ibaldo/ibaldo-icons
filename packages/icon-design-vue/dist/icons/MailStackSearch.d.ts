import type { DefineComponent } from 'vue';

export interface MailStackSearchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MailStackSearch: DefineComponent<MailStackSearchProps>;

export default MailStackSearch;
export { MailStackSearch };

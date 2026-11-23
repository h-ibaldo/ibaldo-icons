import type { DefineComponent } from 'vue';

export interface QuoteOpenProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const QuoteOpen: DefineComponent<QuoteOpenProps>;

export default QuoteOpen;
export { QuoteOpen };

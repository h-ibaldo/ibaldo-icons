import type { DefineComponent } from 'vue';

export interface QuoteProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Quote: DefineComponent<QuoteProps>;

export default Quote;
export { Quote };

import type { DefineComponent } from 'vue';

export interface TextQuoteProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const TextQuote: DefineComponent<TextQuoteProps>;

export default TextQuote;
export { TextQuote };

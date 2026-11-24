import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextQuoteProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextQuote: ForwardRefExoticComponent<TextQuoteProps & RefAttributes<SVGSVGElement>>;

export default TextQuote;
export { TextQuote };

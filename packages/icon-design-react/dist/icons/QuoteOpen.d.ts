import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface QuoteOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const QuoteOpen: ForwardRefExoticComponent<QuoteOpenProps & RefAttributes<SVGSVGElement>>;

export default QuoteOpen;
export { QuoteOpen };

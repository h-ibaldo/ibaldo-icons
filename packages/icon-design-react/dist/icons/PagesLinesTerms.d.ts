import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PagesLinesTermsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PagesLinesTerms: ForwardRefExoticComponent<PagesLinesTermsProps & RefAttributes<SVGSVGElement>>;

export default PagesLinesTerms;
export { PagesLinesTerms };

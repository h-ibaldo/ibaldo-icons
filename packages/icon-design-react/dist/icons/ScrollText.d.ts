import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScrollTextProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScrollText: ForwardRefExoticComponent<ScrollTextProps & RefAttributes<SVGSVGElement>>;

export default ScrollText;
export { ScrollText };

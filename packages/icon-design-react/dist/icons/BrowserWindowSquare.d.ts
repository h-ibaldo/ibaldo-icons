import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowSquare: ForwardRefExoticComponent<BrowserWindowSquareProps & RefAttributes<SVGSVGElement>>;

export default BrowserWindowSquare;
export { BrowserWindowSquare };

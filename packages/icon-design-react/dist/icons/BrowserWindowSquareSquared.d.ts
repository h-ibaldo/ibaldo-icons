import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowSquareSquaredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowSquareSquared: ForwardRefExoticComponent<BrowserWindowSquareSquaredProps & RefAttributes<SVGSVGElement>>;

export default BrowserWindowSquareSquared;
export { BrowserWindowSquareSquared };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserTriangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserTriangle: ForwardRefExoticComponent<BrowserTriangleProps & RefAttributes<SVGSVGElement>>;

export default BrowserTriangle;
export { BrowserTriangle };

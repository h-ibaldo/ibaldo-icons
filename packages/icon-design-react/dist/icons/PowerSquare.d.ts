import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PowerSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PowerSquare: ForwardRefExoticComponent<PowerSquareProps & RefAttributes<SVGSVGElement>>;

export default PowerSquare;
export { PowerSquare };

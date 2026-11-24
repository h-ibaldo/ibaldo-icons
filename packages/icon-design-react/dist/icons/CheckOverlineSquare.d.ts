import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckOverlineSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckOverlineSquare: ForwardRefExoticComponent<CheckOverlineSquareProps & RefAttributes<SVGSVGElement>>;

export default CheckOverlineSquare;
export { CheckOverlineSquare };

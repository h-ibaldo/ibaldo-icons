import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckCircleOpenSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckCircleOpenSquare: ForwardRefExoticComponent<CheckCircleOpenSquareProps & RefAttributes<SVGSVGElement>>;

export default CheckCircleOpenSquare;
export { CheckCircleOpenSquare };

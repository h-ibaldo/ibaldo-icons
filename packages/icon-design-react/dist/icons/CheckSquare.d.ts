import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckSquare: ForwardRefExoticComponent<CheckSquareProps & RefAttributes<SVGSVGElement>>;

export default CheckSquare;
export { CheckSquare };

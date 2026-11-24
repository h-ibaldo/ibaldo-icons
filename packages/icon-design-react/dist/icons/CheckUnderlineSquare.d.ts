import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckUnderlineSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckUnderlineSquare: ForwardRefExoticComponent<CheckUnderlineSquareProps & RefAttributes<SVGSVGElement>>;

export default CheckUnderlineSquare;
export { CheckUnderlineSquare };

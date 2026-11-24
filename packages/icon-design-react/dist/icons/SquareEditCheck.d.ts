import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareEditCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareEditCheck: ForwardRefExoticComponent<SquareEditCheckProps & RefAttributes<SVGSVGElement>>;

export default SquareEditCheck;
export { SquareEditCheck };

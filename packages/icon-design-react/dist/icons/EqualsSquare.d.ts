import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EqualsSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EqualsSquare: ForwardRefExoticComponent<EqualsSquareProps & RefAttributes<SVGSVGElement>>;

export default EqualsSquare;
export { EqualsSquare };

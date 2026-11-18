import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackPlusCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackPlusCorner: ForwardRefExoticComponent<SquareStackPlusCornerProps & RefAttributes<SVGSVGElement>>;

export default SquareStackPlusCorner;
export { SquareStackPlusCorner };

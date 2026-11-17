import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackPlusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackPlusCircle: ForwardRefExoticComponent<SquareStackPlusCircleProps & RefAttributes<SVGSVGElement>>;

export default SquareStackPlusCircle;
export { SquareStackPlusCircle };

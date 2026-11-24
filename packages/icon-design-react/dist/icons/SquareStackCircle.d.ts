import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackCircle: ForwardRefExoticComponent<SquareStackCircleProps & RefAttributes<SVGSVGElement>>;

export default SquareStackCircle;
export { SquareStackCircle };

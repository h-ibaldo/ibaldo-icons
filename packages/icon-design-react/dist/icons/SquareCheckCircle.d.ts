import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareCheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareCheckCircle: ForwardRefExoticComponent<SquareCheckCircleProps & RefAttributes<SVGSVGElement>>;

export default SquareCheckCircle;
export { SquareCheckCircle };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareEditXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareEditX: ForwardRefExoticComponent<SquareEditXProps & RefAttributes<SVGSVGElement>>;

export default SquareEditX;
export { SquareEditX };

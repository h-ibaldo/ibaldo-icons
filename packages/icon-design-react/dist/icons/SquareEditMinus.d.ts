import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareEditMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareEditMinus: ForwardRefExoticComponent<SquareEditMinusProps & RefAttributes<SVGSVGElement>>;

export default SquareEditMinus;
export { SquareEditMinus };

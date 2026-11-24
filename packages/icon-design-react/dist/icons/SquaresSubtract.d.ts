import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquaresSubtractProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquaresSubtract: ForwardRefExoticComponent<SquaresSubtractProps & RefAttributes<SVGSVGElement>>;

export default SquaresSubtract;
export { SquaresSubtract };

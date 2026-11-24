import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackDashed: ForwardRefExoticComponent<SquareStackDashedProps & RefAttributes<SVGSVGElement>>;

export default SquareStackDashed;
export { SquareStackDashed };

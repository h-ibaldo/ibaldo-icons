import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackPlusDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackPlusDashed: ForwardRefExoticComponent<SquareStackPlusDashedProps & RefAttributes<SVGSVGElement>>;

export default SquareStackPlusDashed;
export { SquareStackPlusDashed };

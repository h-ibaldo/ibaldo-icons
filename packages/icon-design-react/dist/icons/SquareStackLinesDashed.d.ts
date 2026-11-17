import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackLinesDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackLinesDashed: ForwardRefExoticComponent<SquareStackLinesDashedProps & RefAttributes<SVGSVGElement>>;

export default SquareStackLinesDashed;
export { SquareStackLinesDashed };

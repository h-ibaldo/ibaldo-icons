import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackSquareDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackSquareDashed: ForwardRefExoticComponent<SquareStackSquareDashedProps & RefAttributes<SVGSVGElement>>;

export default SquareStackSquareDashed;
export { SquareStackSquareDashed };

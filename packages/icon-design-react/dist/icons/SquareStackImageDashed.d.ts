import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackImageDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackImageDashed: ForwardRefExoticComponent<SquareStackImageDashedProps & RefAttributes<SVGSVGElement>>;

export default SquareStackImageDashed;
export { SquareStackImageDashed };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareInsetDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareInsetDashed: ForwardRefExoticComponent<SquareInsetDashedProps & RefAttributes<SVGSVGElement>>;

export default SquareInsetDashed;
export { SquareInsetDashed };

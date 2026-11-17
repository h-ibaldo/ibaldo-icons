import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackX: ForwardRefExoticComponent<SquareStackXProps & RefAttributes<SVGSVGElement>>;

export default SquareStackX;
export { SquareStackX };

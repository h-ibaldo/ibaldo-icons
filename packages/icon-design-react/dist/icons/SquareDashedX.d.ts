import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareDashedXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareDashedX: ForwardRefExoticComponent<SquareDashedXProps & RefAttributes<SVGSVGElement>>;

export default SquareDashedX;
export { SquareDashedX };

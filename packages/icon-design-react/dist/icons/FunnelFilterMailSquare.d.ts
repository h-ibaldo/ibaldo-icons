import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FunnelFilterMailSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FunnelFilterMailSquare: ForwardRefExoticComponent<FunnelFilterMailSquareProps & RefAttributes<SVGSVGElement>>;

export default FunnelFilterMailSquare;
export { FunnelFilterMailSquare };

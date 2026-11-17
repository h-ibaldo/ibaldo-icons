import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FunnelFilterSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FunnelFilterSquare: ForwardRefExoticComponent<FunnelFilterSquareProps & RefAttributes<SVGSVGElement>>;

export default FunnelFilterSquare;
export { FunnelFilterSquare };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VipSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VipSquare: ForwardRefExoticComponent<VipSquareProps & RefAttributes<SVGSVGElement>>;

export default VipSquare;
export { VipSquare };

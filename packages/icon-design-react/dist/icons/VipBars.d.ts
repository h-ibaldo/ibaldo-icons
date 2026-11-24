import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VipBarsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VipBars: ForwardRefExoticComponent<VipBarsProps & RefAttributes<SVGSVGElement>>;

export default VipBars;
export { VipBars };

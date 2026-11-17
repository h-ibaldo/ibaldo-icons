import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileBagCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobileBagCenter: ForwardRefExoticComponent<MobileBagCenterProps & RefAttributes<SVGSVGElement>>;

export default MobileBagCenter;
export { MobileBagCenter };

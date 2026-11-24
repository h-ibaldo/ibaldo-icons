import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileCartCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobileCartCenter: ForwardRefExoticComponent<MobileCartCenterProps & RefAttributes<SVGSVGElement>>;

export default MobileCartCenter;
export { MobileCartCenter };

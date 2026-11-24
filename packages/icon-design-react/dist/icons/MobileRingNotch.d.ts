import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileRingNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobileRingNotch: ForwardRefExoticComponent<MobileRingNotchProps & RefAttributes<SVGSVGElement>>;

export default MobileRingNotch;
export { MobileRingNotch };

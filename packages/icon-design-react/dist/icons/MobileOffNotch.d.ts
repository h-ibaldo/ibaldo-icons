import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileOffNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobileOffNotch: ForwardRefExoticComponent<MobileOffNotchProps & RefAttributes<SVGSVGElement>>;

export default MobileOffNotch;
export { MobileOffNotch };

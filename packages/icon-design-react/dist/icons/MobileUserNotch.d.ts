import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileUserNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobileUserNotch: ForwardRefExoticComponent<MobileUserNotchProps & RefAttributes<SVGSVGElement>>;

export default MobileUserNotch;
export { MobileUserNotch };

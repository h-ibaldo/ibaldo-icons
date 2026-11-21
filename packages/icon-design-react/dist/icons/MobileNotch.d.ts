import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobileNotch: ForwardRefExoticComponent<MobileNotchProps & RefAttributes<SVGSVGElement>>;

export default MobileNotch;
export { MobileNotch };

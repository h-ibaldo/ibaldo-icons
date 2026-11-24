import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileBoltNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobileBoltNotch: ForwardRefExoticComponent<MobileBoltNotchProps & RefAttributes<SVGSVGElement>>;

export default MobileBoltNotch;
export { MobileBoltNotch };

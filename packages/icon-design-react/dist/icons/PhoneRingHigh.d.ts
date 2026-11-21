import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneRingHighProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneRingHigh: ForwardRefExoticComponent<PhoneRingHighProps & RefAttributes<SVGSVGElement>>;

export default PhoneRingHigh;
export { PhoneRingHigh };

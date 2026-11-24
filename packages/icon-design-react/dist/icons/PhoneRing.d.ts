import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneRingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneRing: ForwardRefExoticComponent<PhoneRingProps & RefAttributes<SVGSVGElement>>;

export default PhoneRing;
export { PhoneRing };

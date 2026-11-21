import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneClock: ForwardRefExoticComponent<PhoneClockProps & RefAttributes<SVGSVGElement>>;

export default PhoneClock;
export { PhoneClock };

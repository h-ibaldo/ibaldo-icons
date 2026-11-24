import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneMusicProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneMusic: ForwardRefExoticComponent<PhoneMusicProps & RefAttributes<SVGSVGElement>>;

export default PhoneMusic;
export { PhoneMusic };

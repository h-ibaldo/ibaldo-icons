import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneCheck: ForwardRefExoticComponent<PhoneCheckProps & RefAttributes<SVGSVGElement>>;

export default PhoneCheck;
export { PhoneCheck };

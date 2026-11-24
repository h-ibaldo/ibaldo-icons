import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneBanProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneBan: ForwardRefExoticComponent<PhoneBanProps & RefAttributes<SVGSVGElement>>;

export default PhoneBan;
export { PhoneBan };

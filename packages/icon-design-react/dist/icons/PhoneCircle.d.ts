import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneCircle: ForwardRefExoticComponent<PhoneCircleProps & RefAttributes<SVGSVGElement>>;

export default PhoneCircle;
export { PhoneCircle };

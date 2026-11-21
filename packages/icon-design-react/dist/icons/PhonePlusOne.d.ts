import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhonePlusOneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhonePlusOne: ForwardRefExoticComponent<PhonePlusOneProps & RefAttributes<SVGSVGElement>>;

export default PhonePlusOne;
export { PhonePlusOne };

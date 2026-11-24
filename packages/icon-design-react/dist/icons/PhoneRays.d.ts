import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneRaysProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneRays: ForwardRefExoticComponent<PhoneRaysProps & RefAttributes<SVGSVGElement>>;

export default PhoneRays;
export { PhoneRays };

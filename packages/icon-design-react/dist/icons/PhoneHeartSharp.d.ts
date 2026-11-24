import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneHeartSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneHeartSharp: ForwardRefExoticComponent<PhoneHeartSharpProps & RefAttributes<SVGSVGElement>>;

export default PhoneHeartSharp;
export { PhoneHeartSharp };

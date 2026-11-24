import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneSharp: ForwardRefExoticComponent<PhoneSharpProps & RefAttributes<SVGSVGElement>>;

export default PhoneSharp;
export { PhoneSharp };

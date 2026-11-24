import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneAsteriskSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneAsteriskSharp: ForwardRefExoticComponent<PhoneAsteriskSharpProps & RefAttributes<SVGSVGElement>>;

export default PhoneAsteriskSharp;
export { PhoneAsteriskSharp };

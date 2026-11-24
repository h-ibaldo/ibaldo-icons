import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneClockSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneClockSharp: ForwardRefExoticComponent<PhoneClockSharpProps & RefAttributes<SVGSVGElement>>;

export default PhoneClockSharp;
export { PhoneClockSharp };

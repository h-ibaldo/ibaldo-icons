import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneOffSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneOffSharp: ForwardRefExoticComponent<PhoneOffSharpProps & RefAttributes<SVGSVGElement>>;

export default PhoneOffSharp;
export { PhoneOffSharp };

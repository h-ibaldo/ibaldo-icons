import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneCheckSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneCheckSharp: ForwardRefExoticComponent<PhoneCheckSharpProps & RefAttributes<SVGSVGElement>>;

export default PhoneCheckSharp;
export { PhoneCheckSharp };

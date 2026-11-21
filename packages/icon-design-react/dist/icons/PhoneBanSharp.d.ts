import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneBanSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneBanSharp: ForwardRefExoticComponent<PhoneBanSharpProps & RefAttributes<SVGSVGElement>>;

export default PhoneBanSharp;
export { PhoneBanSharp };

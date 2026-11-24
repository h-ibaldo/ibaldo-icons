import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneListSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneListSharp: ForwardRefExoticComponent<PhoneListSharpProps & RefAttributes<SVGSVGElement>>;

export default PhoneListSharp;
export { PhoneListSharp };

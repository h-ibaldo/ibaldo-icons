import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneLockSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneLockSharp: ForwardRefExoticComponent<PhoneLockSharpProps & RefAttributes<SVGSVGElement>>;

export default PhoneLockSharp;
export { PhoneLockSharp };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneUnlockSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneUnlockSharp: ForwardRefExoticComponent<PhoneUnlockSharpProps & RefAttributes<SVGSVGElement>>;

export default PhoneUnlockSharp;
export { PhoneUnlockSharp };

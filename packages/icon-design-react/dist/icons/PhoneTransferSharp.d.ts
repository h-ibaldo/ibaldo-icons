import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneTransferSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneTransferSharp: ForwardRefExoticComponent<PhoneTransferSharpProps & RefAttributes<SVGSVGElement>>;

export default PhoneTransferSharp;
export { PhoneTransferSharp };

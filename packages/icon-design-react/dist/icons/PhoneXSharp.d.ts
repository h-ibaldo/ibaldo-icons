import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneXSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneXSharp: ForwardRefExoticComponent<PhoneXSharpProps & RefAttributes<SVGSVGElement>>;

export default PhoneXSharp;
export { PhoneXSharp };

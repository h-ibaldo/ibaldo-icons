import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneArrowLeftSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneArrowLeftSharp: ForwardRefExoticComponent<PhoneArrowLeftSharpProps & RefAttributes<SVGSVGElement>>;

export default PhoneArrowLeftSharp;
export { PhoneArrowLeftSharp };

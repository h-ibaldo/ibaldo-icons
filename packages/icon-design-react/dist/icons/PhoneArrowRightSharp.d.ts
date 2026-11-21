import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneArrowRightSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneArrowRightSharp: ForwardRefExoticComponent<PhoneArrowRightSharpProps & RefAttributes<SVGSVGElement>>;

export default PhoneArrowRightSharp;
export { PhoneArrowRightSharp };

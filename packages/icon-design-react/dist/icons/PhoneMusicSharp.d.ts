import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneMusicSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneMusicSharp: ForwardRefExoticComponent<PhoneMusicSharpProps & RefAttributes<SVGSVGElement>>;

export default PhoneMusicSharp;
export { PhoneMusicSharp };

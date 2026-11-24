import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhonePauseSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhonePauseSharp: ForwardRefExoticComponent<PhonePauseSharpProps & RefAttributes<SVGSVGElement>>;

export default PhonePauseSharp;
export { PhonePauseSharp };

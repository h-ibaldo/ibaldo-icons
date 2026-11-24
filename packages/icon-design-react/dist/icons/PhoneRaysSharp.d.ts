import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PhoneRaysSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PhoneRaysSharp: ForwardRefExoticComponent<PhoneRaysSharpProps & RefAttributes<SVGSVGElement>>;

export default PhoneRaysSharp;
export { PhoneRaysSharp };

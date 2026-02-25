import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Selfie32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Selfie32: ForwardRefExoticComponent<Selfie32Props & RefAttributes<SVGSVGElement>>;

export default Selfie32;
export { Selfie32 };

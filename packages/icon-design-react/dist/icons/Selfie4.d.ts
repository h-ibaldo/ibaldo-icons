import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Selfie4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Selfie4: ForwardRefExoticComponent<Selfie4Props & RefAttributes<SVGSVGElement>>;

export default Selfie4;
export { Selfie4 };

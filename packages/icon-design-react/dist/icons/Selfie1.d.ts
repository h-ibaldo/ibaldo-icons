import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Selfie1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Selfie1: ForwardRefExoticComponent<Selfie1Props & RefAttributes<SVGSVGElement>>;

export default Selfie1;
export { Selfie1 };

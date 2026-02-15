import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Selfie5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Selfie5: ForwardRefExoticComponent<Selfie5Props & RefAttributes<SVGSVGElement>>;

export default Selfie5;
export { Selfie5 };

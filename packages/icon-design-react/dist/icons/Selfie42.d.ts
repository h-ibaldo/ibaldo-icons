import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Selfie42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Selfie42: ForwardRefExoticComponent<Selfie42Props & RefAttributes<SVGSVGElement>>;

export default Selfie42;
export { Selfie42 };

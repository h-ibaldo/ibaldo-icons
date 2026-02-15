import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Selfie2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Selfie2: ForwardRefExoticComponent<Selfie2Props & RefAttributes<SVGSVGElement>>;

export default Selfie2;
export { Selfie2 };

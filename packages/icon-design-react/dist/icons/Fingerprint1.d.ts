import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Fingerprint1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Fingerprint1: ForwardRefExoticComponent<Fingerprint1Props & RefAttributes<SVGSVGElement>>;

export default Fingerprint1;
export { Fingerprint1 };

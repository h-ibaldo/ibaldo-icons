import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Fingerprint42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Fingerprint42: ForwardRefExoticComponent<Fingerprint42Props & RefAttributes<SVGSVGElement>>;

export default Fingerprint42;
export { Fingerprint42 };

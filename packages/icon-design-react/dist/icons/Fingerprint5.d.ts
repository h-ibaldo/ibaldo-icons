import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Fingerprint5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Fingerprint5: ForwardRefExoticComponent<Fingerprint5Props & RefAttributes<SVGSVGElement>>;

export default Fingerprint5;
export { Fingerprint5 };

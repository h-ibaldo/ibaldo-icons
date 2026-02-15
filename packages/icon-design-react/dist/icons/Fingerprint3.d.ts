import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Fingerprint3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Fingerprint3: ForwardRefExoticComponent<Fingerprint3Props & RefAttributes<SVGSVGElement>>;

export default Fingerprint3;
export { Fingerprint3 };

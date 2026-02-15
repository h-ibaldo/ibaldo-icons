import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Fingerprint2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Fingerprint2: ForwardRefExoticComponent<Fingerprint2Props & RefAttributes<SVGSVGElement>>;

export default Fingerprint2;
export { Fingerprint2 };

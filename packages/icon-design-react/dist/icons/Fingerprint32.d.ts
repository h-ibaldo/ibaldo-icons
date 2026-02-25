import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Fingerprint32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Fingerprint32: ForwardRefExoticComponent<Fingerprint32Props & RefAttributes<SVGSVGElement>>;

export default Fingerprint32;
export { Fingerprint32 };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FingerprintProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Fingerprint: ForwardRefExoticComponent<FingerprintProps & RefAttributes<SVGSVGElement>>;

export default Fingerprint;
export { Fingerprint };

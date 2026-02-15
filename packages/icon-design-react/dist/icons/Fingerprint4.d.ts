import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Fingerprint4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Fingerprint4: ForwardRefExoticComponent<Fingerprint4Props & RefAttributes<SVGSVGElement>>;

export default Fingerprint4;
export { Fingerprint4 };

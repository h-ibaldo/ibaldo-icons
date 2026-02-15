import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Fingerprint8Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Fingerprint8: ForwardRefExoticComponent<Fingerprint8Props & RefAttributes<SVGSVGElement>>;

export default Fingerprint8;
export { Fingerprint8 };

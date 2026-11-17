import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FingerprintDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FingerprintDotted: ForwardRefExoticComponent<FingerprintDottedProps & RefAttributes<SVGSVGElement>>;

export default FingerprintDotted;
export { FingerprintDotted };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FingerprintSpiralProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FingerprintSpiral: ForwardRefExoticComponent<FingerprintSpiralProps & RefAttributes<SVGSVGElement>>;

export default FingerprintSpiral;
export { FingerprintSpiral };

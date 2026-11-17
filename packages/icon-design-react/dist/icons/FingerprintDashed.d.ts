import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FingerprintDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FingerprintDashed: ForwardRefExoticComponent<FingerprintDashedProps & RefAttributes<SVGSVGElement>>;

export default FingerprintDashed;
export { FingerprintDashed };

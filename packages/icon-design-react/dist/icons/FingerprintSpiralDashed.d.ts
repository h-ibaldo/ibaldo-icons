import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FingerprintSpiralDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FingerprintSpiralDashed: ForwardRefExoticComponent<FingerprintSpiralDashedProps & RefAttributes<SVGSVGElement>>;

export default FingerprintSpiralDashed;
export { FingerprintSpiralDashed };

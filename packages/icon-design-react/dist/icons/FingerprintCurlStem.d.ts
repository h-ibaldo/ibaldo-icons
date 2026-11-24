import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FingerprintCurlStemProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FingerprintCurlStem: ForwardRefExoticComponent<FingerprintCurlStemProps & RefAttributes<SVGSVGElement>>;

export default FingerprintCurlStem;
export { FingerprintCurlStem };

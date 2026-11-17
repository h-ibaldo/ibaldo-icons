import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FingerprintCurlProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FingerprintCurl: ForwardRefExoticComponent<FingerprintCurlProps & RefAttributes<SVGSVGElement>>;

export default FingerprintCurl;
export { FingerprintCurl };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FingerprintWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FingerprintWide: ForwardRefExoticComponent<FingerprintWideProps & RefAttributes<SVGSVGElement>>;

export default FingerprintWide;
export { FingerprintWide };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CertificateTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CertificateTall: ForwardRefExoticComponent<CertificateTallProps & RefAttributes<SVGSVGElement>>;

export default CertificateTall;
export { CertificateTall };

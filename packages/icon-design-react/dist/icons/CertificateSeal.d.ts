import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CertificateSealProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CertificateSeal: ForwardRefExoticComponent<CertificateSealProps & RefAttributes<SVGSVGElement>>;

export default CertificateSeal;
export { CertificateSeal };

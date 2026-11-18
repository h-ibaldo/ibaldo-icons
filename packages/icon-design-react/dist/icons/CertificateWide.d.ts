import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CertificateWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CertificateWide: ForwardRefExoticComponent<CertificateWideProps & RefAttributes<SVGSVGElement>>;

export default CertificateWide;
export { CertificateWide };

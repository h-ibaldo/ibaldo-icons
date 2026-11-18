import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CertificateSealWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CertificateSealWide: ForwardRefExoticComponent<CertificateSealWideProps & RefAttributes<SVGSVGElement>>;

export default CertificateSealWide;
export { CertificateSealWide };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CertificateProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Certificate: ForwardRefExoticComponent<CertificateProps & RefAttributes<SVGSVGElement>>;

export default Certificate;
export { Certificate };

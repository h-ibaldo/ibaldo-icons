import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CertificateWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CertificateWide: ForwardRefExoticComponent<CertificateWideProps & RefAttributes<Svg>>;

export default CertificateWide;
export { CertificateWide };

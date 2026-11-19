import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CertificateSealWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CertificateSealWide: ForwardRefExoticComponent<CertificateSealWideProps & RefAttributes<Svg>>;

export default CertificateSealWide;
export { CertificateSealWide };

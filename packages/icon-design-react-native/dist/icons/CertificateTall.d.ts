import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CertificateTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CertificateTall: ForwardRefExoticComponent<CertificateTallProps & RefAttributes<Svg>>;

export default CertificateTall;
export { CertificateTall };

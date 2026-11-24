import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CertificateProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Certificate: ForwardRefExoticComponent<CertificateProps & RefAttributes<Svg>>;

export default Certificate;
export { Certificate };

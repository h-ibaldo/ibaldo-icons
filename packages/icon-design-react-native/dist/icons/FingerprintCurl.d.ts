import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FingerprintCurlProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FingerprintCurl: ForwardRefExoticComponent<FingerprintCurlProps & RefAttributes<Svg>>;

export default FingerprintCurl;
export { FingerprintCurl };

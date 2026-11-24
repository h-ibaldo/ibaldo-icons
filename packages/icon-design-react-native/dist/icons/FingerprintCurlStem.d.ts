import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FingerprintCurlStemProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FingerprintCurlStem: ForwardRefExoticComponent<FingerprintCurlStemProps & RefAttributes<Svg>>;

export default FingerprintCurlStem;
export { FingerprintCurlStem };

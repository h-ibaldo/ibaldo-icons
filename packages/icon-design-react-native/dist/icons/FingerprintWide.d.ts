import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FingerprintWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FingerprintWide: ForwardRefExoticComponent<FingerprintWideProps & RefAttributes<Svg>>;

export default FingerprintWide;
export { FingerprintWide };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FingerprintProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Fingerprint: ForwardRefExoticComponent<FingerprintProps & RefAttributes<Svg>>;

export default Fingerprint;
export { Fingerprint };

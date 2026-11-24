import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FingerprintSpiralProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FingerprintSpiral: ForwardRefExoticComponent<FingerprintSpiralProps & RefAttributes<Svg>>;

export default FingerprintSpiral;
export { FingerprintSpiral };

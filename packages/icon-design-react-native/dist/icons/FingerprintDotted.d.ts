import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FingerprintDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FingerprintDotted: ForwardRefExoticComponent<FingerprintDottedProps & RefAttributes<Svg>>;

export default FingerprintDotted;
export { FingerprintDotted };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FingerprintDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FingerprintDashed: ForwardRefExoticComponent<FingerprintDashedProps & RefAttributes<Svg>>;

export default FingerprintDashed;
export { FingerprintDashed };

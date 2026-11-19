import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FingerprintSpiralDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FingerprintSpiralDashed: ForwardRefExoticComponent<FingerprintSpiralDashedProps & RefAttributes<Svg>>;

export default FingerprintSpiralDashed;
export { FingerprintSpiralDashed };

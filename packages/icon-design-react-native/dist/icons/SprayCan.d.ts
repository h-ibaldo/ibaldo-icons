import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SprayCanProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SprayCan: ForwardRefExoticComponent<SprayCanProps & RefAttributes<Svg>>;

export default SprayCan;
export { SprayCan };

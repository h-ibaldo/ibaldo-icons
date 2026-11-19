import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AdjustPairProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AdjustPair: ForwardRefExoticComponent<AdjustPairProps & RefAttributes<Svg>>;

export default AdjustPair;
export { AdjustPair };

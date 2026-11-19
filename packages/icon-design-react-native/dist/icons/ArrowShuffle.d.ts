import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowShuffleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowShuffle: ForwardRefExoticComponent<ArrowShuffleProps & RefAttributes<Svg>>;

export default ArrowShuffle;
export { ArrowShuffle };

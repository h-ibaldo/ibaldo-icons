import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BagRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BagRound: ForwardRefExoticComponent<BagRoundProps & RefAttributes<Svg>>;

export default BagRound;
export { BagRound };

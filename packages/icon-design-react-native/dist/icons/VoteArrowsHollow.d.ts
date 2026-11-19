import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VoteArrowsHollowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VoteArrowsHollow: ForwardRefExoticComponent<VoteArrowsHollowProps & RefAttributes<Svg>>;

export default VoteArrowsHollow;
export { VoteArrowsHollow };

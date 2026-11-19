import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VoteArrowsPlusMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VoteArrowsPlusMinus: ForwardRefExoticComponent<VoteArrowsPlusMinusProps & RefAttributes<Svg>>;

export default VoteArrowsPlusMinus;
export { VoteArrowsPlusMinus };

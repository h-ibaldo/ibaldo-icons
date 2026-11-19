import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VoteArrowsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VoteArrows: ForwardRefExoticComponent<VoteArrowsProps & RefAttributes<Svg>>;

export default VoteArrows;
export { VoteArrows };

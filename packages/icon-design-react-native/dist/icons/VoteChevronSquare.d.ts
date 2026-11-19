import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VoteChevronSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VoteChevronSquare: ForwardRefExoticComponent<VoteChevronSquareProps & RefAttributes<Svg>>;

export default VoteChevronSquare;
export { VoteChevronSquare };

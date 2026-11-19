import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PollHorizontalSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PollHorizontalSquare: ForwardRefExoticComponent<PollHorizontalSquareProps & RefAttributes<Svg>>;

export default PollHorizontalSquare;
export { PollHorizontalSquare };

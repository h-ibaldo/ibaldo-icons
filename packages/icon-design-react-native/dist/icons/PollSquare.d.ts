import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PollSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PollSquare: ForwardRefExoticComponent<PollSquareProps & RefAttributes<Svg>>;

export default PollSquare;
export { PollSquare };

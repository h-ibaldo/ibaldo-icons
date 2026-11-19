import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckSquareOpenJoinedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckSquareOpenJoined: ForwardRefExoticComponent<CheckSquareOpenJoinedProps & RefAttributes<Svg>>;

export default CheckSquareOpenJoined;
export { CheckSquareOpenJoined };

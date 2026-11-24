import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckDoubleJoinedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckDoubleJoined: ForwardRefExoticComponent<CheckDoubleJoinedProps & RefAttributes<Svg>>;

export default CheckDoubleJoined;
export { CheckDoubleJoined };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckCircleOpenJoinedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckCircleOpenJoined: ForwardRefExoticComponent<CheckCircleOpenJoinedProps & RefAttributes<Svg>>;

export default CheckCircleOpenJoined;
export { CheckCircleOpenJoined };

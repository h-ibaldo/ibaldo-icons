import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockUserProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockUser: ForwardRefExoticComponent<ClockUserProps & RefAttributes<Svg>>;

export default ClockUser;
export { ClockUser };

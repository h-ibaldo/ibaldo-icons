import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockArrowLeftRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockArrowLeftRight: ForwardRefExoticComponent<ClockArrowLeftRightProps & RefAttributes<Svg>>;

export default ClockArrowLeftRight;
export { ClockArrowLeftRight };

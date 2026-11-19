import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockArrowRight: ForwardRefExoticComponent<ClockArrowRightProps & RefAttributes<Svg>>;

export default ClockArrowRight;
export { ClockArrowRight };

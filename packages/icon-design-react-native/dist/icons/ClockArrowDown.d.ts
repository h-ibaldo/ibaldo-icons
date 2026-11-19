import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockArrowDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockArrowDown: ForwardRefExoticComponent<ClockArrowDownProps & RefAttributes<Svg>>;

export default ClockArrowDown;
export { ClockArrowDown };

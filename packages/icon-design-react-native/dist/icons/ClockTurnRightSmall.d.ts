import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockTurnRightSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockTurnRightSmall: ForwardRefExoticComponent<ClockTurnRightSmallProps & RefAttributes<Svg>>;

export default ClockTurnRightSmall;
export { ClockTurnRightSmall };

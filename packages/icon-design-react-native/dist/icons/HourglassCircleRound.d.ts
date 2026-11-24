import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassCircleRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassCircleRound: ForwardRefExoticComponent<HourglassCircleRoundProps & RefAttributes<Svg>>;

export default HourglassCircleRound;
export { HourglassCircleRound };

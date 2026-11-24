import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassSquareRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassSquareRound: ForwardRefExoticComponent<HourglassSquareRoundProps & RefAttributes<Svg>>;

export default HourglassSquareRound;
export { HourglassSquareRound };

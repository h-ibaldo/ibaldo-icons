import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassRound: ForwardRefExoticComponent<HourglassRoundProps & RefAttributes<Svg>>;

export default HourglassRound;
export { HourglassRound };

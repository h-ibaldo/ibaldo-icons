import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassSandFallingRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassSandFallingRound: ForwardRefExoticComponent<HourglassSandFallingRoundProps & RefAttributes<Svg>>;

export default HourglassSandFallingRound;
export { HourglassSandFallingRound };

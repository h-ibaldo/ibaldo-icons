import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassSandRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassSandRound: ForwardRefExoticComponent<HourglassSandRoundProps & RefAttributes<Svg>>;

export default HourglassSandRound;
export { HourglassSandRound };

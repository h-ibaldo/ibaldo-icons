import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HourglassSyncRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HourglassSyncRound: ForwardRefExoticComponent<HourglassSyncRoundProps & RefAttributes<Svg>>;

export default HourglassSyncRound;
export { HourglassSyncRound };

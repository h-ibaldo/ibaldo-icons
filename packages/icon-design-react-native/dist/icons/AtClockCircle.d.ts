import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtClockCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtClockCircle: ForwardRefExoticComponent<AtClockCircleProps & RefAttributes<Svg>>;

export default AtClockCircle;
export { AtClockCircle };

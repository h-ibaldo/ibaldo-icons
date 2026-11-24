import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtClockCircle2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtClockCircle2: ForwardRefExoticComponent<AtClockCircle2Props & RefAttributes<Svg>>;

export default AtClockCircle2;
export { AtClockCircle2 };

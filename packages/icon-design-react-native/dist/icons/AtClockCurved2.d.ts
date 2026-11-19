import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtClockCurved2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtClockCurved2: ForwardRefExoticComponent<AtClockCurved2Props & RefAttributes<Svg>>;

export default AtClockCurved2;
export { AtClockCurved2 };

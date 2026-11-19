import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtClockCurvedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtClockCurved: ForwardRefExoticComponent<AtClockCurvedProps & RefAttributes<Svg>>;

export default AtClockCurved;
export { AtClockCurved };

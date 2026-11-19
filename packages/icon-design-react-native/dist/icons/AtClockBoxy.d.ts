import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtClockBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtClockBoxy: ForwardRefExoticComponent<AtClockBoxyProps & RefAttributes<Svg>>;

export default AtClockBoxy;
export { AtClockBoxy };

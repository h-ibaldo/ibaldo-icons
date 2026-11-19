import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmPieProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmPie: ForwardRefExoticComponent<AlarmPieProps & RefAttributes<Svg>>;

export default AlarmPie;
export { AlarmPie };

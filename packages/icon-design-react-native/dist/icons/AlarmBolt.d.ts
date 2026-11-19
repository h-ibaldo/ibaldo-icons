import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlarmBoltProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlarmBolt: ForwardRefExoticComponent<AlarmBoltProps & RefAttributes<Svg>>;

export default AlarmBolt;
export { AlarmBolt };

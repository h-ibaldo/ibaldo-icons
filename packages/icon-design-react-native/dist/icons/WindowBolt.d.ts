import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowBoltProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowBolt: ForwardRefExoticComponent<WindowBoltProps & RefAttributes<Svg>>;

export default WindowBolt;
export { WindowBolt };

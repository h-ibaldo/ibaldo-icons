import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ServerBoltProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ServerBolt: ForwardRefExoticComponent<ServerBoltProps & RefAttributes<Svg>>;

export default ServerBolt;
export { ServerBolt };

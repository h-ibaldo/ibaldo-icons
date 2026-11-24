import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ServerPlusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ServerPlusCircle: ForwardRefExoticComponent<ServerPlusCircleProps & RefAttributes<Svg>>;

export default ServerPlusCircle;
export { ServerPlusCircle };

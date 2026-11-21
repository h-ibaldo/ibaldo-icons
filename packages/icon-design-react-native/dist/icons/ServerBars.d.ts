import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ServerBarsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ServerBars: ForwardRefExoticComponent<ServerBarsProps & RefAttributes<Svg>>;

export default ServerBars;
export { ServerBars };

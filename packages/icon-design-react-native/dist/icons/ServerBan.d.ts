import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ServerBanProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ServerBan: ForwardRefExoticComponent<ServerBanProps & RefAttributes<Svg>>;

export default ServerBan;
export { ServerBan };

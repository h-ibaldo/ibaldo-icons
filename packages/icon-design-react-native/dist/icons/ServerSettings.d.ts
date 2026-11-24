import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ServerSettingsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ServerSettings: ForwardRefExoticComponent<ServerSettingsProps & RefAttributes<Svg>>;

export default ServerSettings;
export { ServerSettings };

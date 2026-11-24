import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudMusicDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudMusicDouble: ForwardRefExoticComponent<CloudMusicDoubleProps & RefAttributes<Svg>>;

export default CloudMusicDouble;
export { CloudMusicDouble };

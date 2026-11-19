import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudMusicProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudMusic: ForwardRefExoticComponent<CloudMusicProps & RefAttributes<Svg>>;

export default CloudMusic;
export { CloudMusic };

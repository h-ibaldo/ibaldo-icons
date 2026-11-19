import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudMusicTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudMusicTall: ForwardRefExoticComponent<CloudMusicTallProps & RefAttributes<Svg>>;

export default CloudMusicTall;
export { CloudMusicTall };

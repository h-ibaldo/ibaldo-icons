import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudMusicDoubleTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudMusicDoubleTall: ForwardRefExoticComponent<CloudMusicDoubleTallProps & RefAttributes<Svg>>;

export default CloudMusicDoubleTall;
export { CloudMusicDoubleTall };

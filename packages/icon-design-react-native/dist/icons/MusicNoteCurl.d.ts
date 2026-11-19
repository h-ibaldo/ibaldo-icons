import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MusicNoteCurlProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MusicNoteCurl: ForwardRefExoticComponent<MusicNoteCurlProps & RefAttributes<Svg>>;

export default MusicNoteCurl;
export { MusicNoteCurl };

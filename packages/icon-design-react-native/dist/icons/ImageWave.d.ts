import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ImageWaveProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ImageWave: ForwardRefExoticComponent<ImageWaveProps & RefAttributes<Svg>>;

export default ImageWave;
export { ImageWave };

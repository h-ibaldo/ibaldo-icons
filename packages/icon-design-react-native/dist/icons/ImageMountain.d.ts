import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ImageMountainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ImageMountain: ForwardRefExoticComponent<ImageMountainProps & RefAttributes<Svg>>;

export default ImageMountain;
export { ImageMountain };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ImageSunRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ImageSunRight: ForwardRefExoticComponent<ImageSunRightProps & RefAttributes<Svg>>;

export default ImageSunRight;
export { ImageSunRight };

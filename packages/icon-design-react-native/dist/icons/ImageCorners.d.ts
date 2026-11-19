import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ImageCornersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ImageCorners: ForwardRefExoticComponent<ImageCornersProps & RefAttributes<Svg>>;

export default ImageCorners;
export { ImageCorners };

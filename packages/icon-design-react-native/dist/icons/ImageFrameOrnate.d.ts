import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ImageFrameOrnateProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ImageFrameOrnate: ForwardRefExoticComponent<ImageFrameOrnateProps & RefAttributes<Svg>>;

export default ImageFrameOrnate;
export { ImageFrameOrnate };

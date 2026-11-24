import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ImageMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ImageMinus: ForwardRefExoticComponent<ImageMinusProps & RefAttributes<Svg>>;

export default ImageMinus;
export { ImageMinus };

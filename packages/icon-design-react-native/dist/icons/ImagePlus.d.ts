import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ImagePlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ImagePlus: ForwardRefExoticComponent<ImagePlusProps & RefAttributes<Svg>>;

export default ImagePlus;
export { ImagePlus };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ImageHillsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ImageHills: ForwardRefExoticComponent<ImageHillsProps & RefAttributes<Svg>>;

export default ImageHills;
export { ImageHills };

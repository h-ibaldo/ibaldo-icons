import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ImagePeaksProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ImagePeaks: ForwardRefExoticComponent<ImagePeaksProps & RefAttributes<Svg>>;

export default ImagePeaks;
export { ImagePeaks };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ImageWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ImageWide: ForwardRefExoticComponent<ImageWideProps & RefAttributes<Svg>>;

export default ImageWide;
export { ImageWide };

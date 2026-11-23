import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GalleryHorizontalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GalleryHorizontal: ForwardRefExoticComponent<GalleryHorizontalProps & RefAttributes<Svg>>;

export default GalleryHorizontal;
export { GalleryHorizontal };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GalleryTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GalleryTop: ForwardRefExoticComponent<GalleryTopProps & RefAttributes<Svg>>;

export default GalleryTop;
export { GalleryTop };

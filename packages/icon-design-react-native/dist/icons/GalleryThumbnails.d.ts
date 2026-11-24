import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GalleryThumbnailsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GalleryThumbnails: ForwardRefExoticComponent<GalleryThumbnailsProps & RefAttributes<Svg>>;

export default GalleryThumbnails;
export { GalleryThumbnails };

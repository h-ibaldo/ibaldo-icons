import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GalleryLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GalleryLeft: ForwardRefExoticComponent<GalleryLeftProps & RefAttributes<Svg>>;

export default GalleryLeft;
export { GalleryLeft };

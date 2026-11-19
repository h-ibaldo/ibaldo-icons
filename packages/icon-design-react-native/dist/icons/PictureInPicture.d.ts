import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PictureInPictureProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PictureInPicture: ForwardRefExoticComponent<PictureInPictureProps & RefAttributes<Svg>>;

export default PictureInPicture;
export { PictureInPicture };

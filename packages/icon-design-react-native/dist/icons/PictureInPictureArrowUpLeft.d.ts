import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PictureInPictureArrowUpLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PictureInPictureArrowUpLeft: ForwardRefExoticComponent<PictureInPictureArrowUpLeftProps & RefAttributes<Svg>>;

export default PictureInPictureArrowUpLeft;
export { PictureInPictureArrowUpLeft };

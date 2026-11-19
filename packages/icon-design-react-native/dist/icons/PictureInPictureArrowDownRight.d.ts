import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PictureInPictureArrowDownRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PictureInPictureArrowDownRight: ForwardRefExoticComponent<PictureInPictureArrowDownRightProps & RefAttributes<Svg>>;

export default PictureInPictureArrowDownRight;
export { PictureInPictureArrowDownRight };

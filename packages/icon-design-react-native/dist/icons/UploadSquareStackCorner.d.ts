import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface UploadSquareStackCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const UploadSquareStackCorner: ForwardRefExoticComponent<UploadSquareStackCornerProps & RefAttributes<Svg>>;

export default UploadSquareStackCorner;
export { UploadSquareStackCorner };

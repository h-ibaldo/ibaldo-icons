import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DownloadSquareStackCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DownloadSquareStackCorner: ForwardRefExoticComponent<DownloadSquareStackCornerProps & RefAttributes<Svg>>;

export default DownloadSquareStackCorner;
export { DownloadSquareStackCorner };

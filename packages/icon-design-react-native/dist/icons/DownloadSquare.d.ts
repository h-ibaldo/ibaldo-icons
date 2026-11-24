import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DownloadSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DownloadSquare: ForwardRefExoticComponent<DownloadSquareProps & RefAttributes<Svg>>;

export default DownloadSquare;
export { DownloadSquare };

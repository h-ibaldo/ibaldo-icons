import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DownloadTraySquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DownloadTraySquare: ForwardRefExoticComponent<DownloadTraySquareProps & RefAttributes<Svg>>;

export default DownloadTraySquare;
export { DownloadTraySquare };

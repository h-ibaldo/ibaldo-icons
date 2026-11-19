import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DownloadSquareStackOpenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DownloadSquareStackOpen: ForwardRefExoticComponent<DownloadSquareStackOpenProps & RefAttributes<Svg>>;

export default DownloadSquareStackOpen;
export { DownloadSquareStackOpen };

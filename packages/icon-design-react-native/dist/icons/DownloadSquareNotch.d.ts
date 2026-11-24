import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DownloadSquareNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DownloadSquareNotch: ForwardRefExoticComponent<DownloadSquareNotchProps & RefAttributes<Svg>>;

export default DownloadSquareNotch;
export { DownloadSquareNotch };

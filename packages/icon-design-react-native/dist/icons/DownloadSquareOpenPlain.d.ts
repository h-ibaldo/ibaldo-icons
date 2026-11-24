import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DownloadSquareOpenPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DownloadSquareOpenPlain: ForwardRefExoticComponent<DownloadSquareOpenPlainProps & RefAttributes<Svg>>;

export default DownloadSquareOpenPlain;
export { DownloadSquareOpenPlain };

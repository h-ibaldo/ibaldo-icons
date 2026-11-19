import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DownloadSquareStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DownloadSquareStack: ForwardRefExoticComponent<DownloadSquareStackProps & RefAttributes<Svg>>;

export default DownloadSquareStack;
export { DownloadSquareStack };

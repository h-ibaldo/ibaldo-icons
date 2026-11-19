import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DownloadProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Download: ForwardRefExoticComponent<DownloadProps & RefAttributes<Svg>>;

export default Download;
export { Download };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileChartBarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileChartBar: ForwardRefExoticComponent<FileChartBarProps & RefAttributes<Svg>>;

export default FileChartBar;
export { FileChartBar };

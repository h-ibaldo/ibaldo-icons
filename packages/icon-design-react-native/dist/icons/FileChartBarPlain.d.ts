import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileChartBarPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileChartBarPlain: ForwardRefExoticComponent<FileChartBarPlainProps & RefAttributes<Svg>>;

export default FileChartBarPlain;
export { FileChartBarPlain };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileChartBarCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileChartBarCut: ForwardRefExoticComponent<FileChartBarCutProps & RefAttributes<Svg>>;

export default FileChartBarCut;
export { FileChartBarCut };

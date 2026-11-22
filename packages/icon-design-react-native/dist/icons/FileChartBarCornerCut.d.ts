import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileChartBarCornerCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileChartBarCornerCut: ForwardRefExoticComponent<FileChartBarCornerCutProps & RefAttributes<Svg>>;

export default FileChartBarCornerCut;
export { FileChartBarCornerCut };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileChartAxisProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileChartAxis: ForwardRefExoticComponent<FileChartAxisProps & RefAttributes<Svg>>;

export default FileChartAxis;
export { FileChartAxis };

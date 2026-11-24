import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileRefreshCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileRefreshCut: ForwardRefExoticComponent<FileRefreshCutProps & RefAttributes<Svg>>;

export default FileRefreshCut;
export { FileRefreshCut };

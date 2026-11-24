import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileWarningCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileWarningCut: ForwardRefExoticComponent<FileWarningCutProps & RefAttributes<Svg>>;

export default FileWarningCut;
export { FileWarningCut };

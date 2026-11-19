import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileWarningProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileWarning: ForwardRefExoticComponent<FileWarningProps & RefAttributes<Svg>>;

export default FileWarning;
export { FileWarning };

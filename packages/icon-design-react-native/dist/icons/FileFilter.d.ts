import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileFilterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileFilter: ForwardRefExoticComponent<FileFilterProps & RefAttributes<Svg>>;

export default FileFilter;
export { FileFilter };

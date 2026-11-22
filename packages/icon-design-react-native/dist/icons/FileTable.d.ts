import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileTableProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileTable: ForwardRefExoticComponent<FileTableProps & RefAttributes<Svg>>;

export default FileTable;
export { FileTable };

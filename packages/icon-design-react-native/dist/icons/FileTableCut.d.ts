import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileTableCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileTableCut: ForwardRefExoticComponent<FileTableCutProps & RefAttributes<Svg>>;

export default FileTableCut;
export { FileTableCut };

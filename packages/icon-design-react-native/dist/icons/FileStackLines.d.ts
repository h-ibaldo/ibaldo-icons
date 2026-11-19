import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileStackLinesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileStackLines: ForwardRefExoticComponent<FileStackLinesProps & RefAttributes<Svg>>;

export default FileStackLines;
export { FileStackLines };

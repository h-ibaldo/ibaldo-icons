import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileStackLinesPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileStackLinesPlain: ForwardRefExoticComponent<FileStackLinesPlainProps & RefAttributes<Svg>>;

export default FileStackLinesPlain;
export { FileStackLinesPlain };

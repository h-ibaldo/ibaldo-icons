import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileCodeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileCode: ForwardRefExoticComponent<FileCodeProps & RefAttributes<Svg>>;

export default FileCode;
export { FileCode };

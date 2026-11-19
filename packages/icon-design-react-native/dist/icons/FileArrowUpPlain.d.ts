import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowUpPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowUpPlain: ForwardRefExoticComponent<FileArrowUpPlainProps & RefAttributes<Svg>>;

export default FileArrowUpPlain;
export { FileArrowUpPlain };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowDownCornerPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowDownCornerPlain: ForwardRefExoticComponent<FileArrowDownCornerPlainProps & RefAttributes<Svg>>;

export default FileArrowDownCornerPlain;
export { FileArrowDownCornerPlain };

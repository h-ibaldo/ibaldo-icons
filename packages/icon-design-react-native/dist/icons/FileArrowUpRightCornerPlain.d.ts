import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowUpRightCornerPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowUpRightCornerPlain: ForwardRefExoticComponent<FileArrowUpRightCornerPlainProps & RefAttributes<Svg>>;

export default FileArrowUpRightCornerPlain;
export { FileArrowUpRightCornerPlain };

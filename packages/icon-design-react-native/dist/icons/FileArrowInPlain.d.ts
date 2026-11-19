import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowInPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowInPlain: ForwardRefExoticComponent<FileArrowInPlainProps & RefAttributes<Svg>>;

export default FileArrowInPlain;
export { FileArrowInPlain };

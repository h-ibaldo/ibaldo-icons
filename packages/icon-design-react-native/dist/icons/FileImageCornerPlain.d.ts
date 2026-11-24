import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileImageCornerPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileImageCornerPlain: ForwardRefExoticComponent<FileImageCornerPlainProps & RefAttributes<Svg>>;

export default FileImageCornerPlain;
export { FileImageCornerPlain };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowBendPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowBendPlain: ForwardRefExoticComponent<FileArrowBendPlainProps & RefAttributes<Svg>>;

export default FileArrowBendPlain;
export { FileArrowBendPlain };

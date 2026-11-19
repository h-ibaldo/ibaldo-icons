import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowUturnRightPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowUturnRightPlain: ForwardRefExoticComponent<FileArrowUturnRightPlainProps & RefAttributes<Svg>>;

export default FileArrowUturnRightPlain;
export { FileArrowUturnRightPlain };

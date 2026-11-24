import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowUturnRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowUturnRight: ForwardRefExoticComponent<FileArrowUturnRightProps & RefAttributes<Svg>>;

export default FileArrowUturnRight;
export { FileArrowUturnRight };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowUpRightCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowUpRightCorner: ForwardRefExoticComponent<FileArrowUpRightCornerProps & RefAttributes<Svg>>;

export default FileArrowUpRightCorner;
export { FileArrowUpRightCorner };

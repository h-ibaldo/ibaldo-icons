import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileJoinedArrowDiagonalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileJoinedArrowDiagonal: ForwardRefExoticComponent<FileJoinedArrowDiagonalProps & RefAttributes<Svg>>;

export default FileJoinedArrowDiagonal;
export { FileJoinedArrowDiagonal };

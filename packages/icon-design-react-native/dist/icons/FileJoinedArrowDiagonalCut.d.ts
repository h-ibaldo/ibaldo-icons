import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileJoinedArrowDiagonalCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileJoinedArrowDiagonalCut: ForwardRefExoticComponent<FileJoinedArrowDiagonalCutProps & RefAttributes<Svg>>;

export default FileJoinedArrowDiagonalCut;
export { FileJoinedArrowDiagonalCut };

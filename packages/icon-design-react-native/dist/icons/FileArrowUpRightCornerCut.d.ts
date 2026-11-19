import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowUpRightCornerCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowUpRightCornerCut: ForwardRefExoticComponent<FileArrowUpRightCornerCutProps & RefAttributes<Svg>>;

export default FileArrowUpRightCornerCut;
export { FileArrowUpRightCornerCut };

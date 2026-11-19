import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowDownCornerCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowDownCornerCut: ForwardRefExoticComponent<FileArrowDownCornerCutProps & RefAttributes<Svg>>;

export default FileArrowDownCornerCut;
export { FileArrowDownCornerCut };

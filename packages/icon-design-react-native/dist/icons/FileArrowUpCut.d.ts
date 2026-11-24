import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowUpCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowUpCut: ForwardRefExoticComponent<FileArrowUpCutProps & RefAttributes<Svg>>;

export default FileArrowUpCut;
export { FileArrowUpCut };

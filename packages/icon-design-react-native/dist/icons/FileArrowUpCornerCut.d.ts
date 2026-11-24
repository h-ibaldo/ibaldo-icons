import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowUpCornerCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowUpCornerCut: ForwardRefExoticComponent<FileArrowUpCornerCutProps & RefAttributes<Svg>>;

export default FileArrowUpCornerCut;
export { FileArrowUpCornerCut };

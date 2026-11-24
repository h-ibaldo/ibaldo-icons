import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileXCornerCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileXCornerCut: ForwardRefExoticComponent<FileXCornerCutProps & RefAttributes<Svg>>;

export default FileXCornerCut;
export { FileXCornerCut };

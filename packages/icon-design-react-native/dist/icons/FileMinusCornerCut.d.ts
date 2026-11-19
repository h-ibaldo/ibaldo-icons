import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileMinusCornerCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileMinusCornerCut: ForwardRefExoticComponent<FileMinusCornerCutProps & RefAttributes<Svg>>;

export default FileMinusCornerCut;
export { FileMinusCornerCut };

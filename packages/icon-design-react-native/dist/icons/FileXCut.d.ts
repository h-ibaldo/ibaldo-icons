import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileXCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileXCut: ForwardRefExoticComponent<FileXCutProps & RefAttributes<Svg>>;

export default FileXCut;
export { FileXCut };

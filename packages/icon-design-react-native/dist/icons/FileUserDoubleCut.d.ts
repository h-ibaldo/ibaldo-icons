import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileUserDoubleCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileUserDoubleCut: ForwardRefExoticComponent<FileUserDoubleCutProps & RefAttributes<Svg>>;

export default FileUserDoubleCut;
export { FileUserDoubleCut };

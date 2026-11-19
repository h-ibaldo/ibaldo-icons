import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileJoinedDotsCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileJoinedDotsCut: ForwardRefExoticComponent<FileJoinedDotsCutProps & RefAttributes<Svg>>;

export default FileJoinedDotsCut;
export { FileJoinedDotsCut };

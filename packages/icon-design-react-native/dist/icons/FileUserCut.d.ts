import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileUserCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileUserCut: ForwardRefExoticComponent<FileUserCutProps & RefAttributes<Svg>>;

export default FileUserCut;
export { FileUserCut };

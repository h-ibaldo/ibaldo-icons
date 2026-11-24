import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowInCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowInCut: ForwardRefExoticComponent<FileArrowInCutProps & RefAttributes<Svg>>;

export default FileArrowInCut;
export { FileArrowInCut };

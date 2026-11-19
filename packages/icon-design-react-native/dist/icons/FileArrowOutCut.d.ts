import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowOutCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowOutCut: ForwardRefExoticComponent<FileArrowOutCutProps & RefAttributes<Svg>>;

export default FileArrowOutCut;
export { FileArrowOutCut };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowDownCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowDownCut: ForwardRefExoticComponent<FileArrowDownCutProps & RefAttributes<Svg>>;

export default FileArrowDownCut;
export { FileArrowDownCut };

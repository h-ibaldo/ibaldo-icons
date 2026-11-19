import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowUturnRightCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowUturnRightCut: ForwardRefExoticComponent<FileArrowUturnRightCutProps & RefAttributes<Svg>>;

export default FileArrowUturnRightCut;
export { FileArrowUturnRightCut };

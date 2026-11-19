import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowInProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowIn: ForwardRefExoticComponent<FileArrowInProps & RefAttributes<Svg>>;

export default FileArrowIn;
export { FileArrowIn };

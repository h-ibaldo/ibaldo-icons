import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowOutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowOut: ForwardRefExoticComponent<FileArrowOutProps & RefAttributes<Svg>>;

export default FileArrowOut;
export { FileArrowOut };

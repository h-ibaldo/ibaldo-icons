import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowDown: ForwardRefExoticComponent<FileArrowDownProps & RefAttributes<Svg>>;

export default FileArrowDown;
export { FileArrowDown };

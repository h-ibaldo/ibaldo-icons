import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowUp: ForwardRefExoticComponent<FileArrowUpProps & RefAttributes<Svg>>;

export default FileArrowUp;
export { FileArrowUp };

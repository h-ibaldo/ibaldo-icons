import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileEditProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileEdit: ForwardRefExoticComponent<FileEditProps & RefAttributes<Svg>>;

export default FileEdit;
export { FileEdit };

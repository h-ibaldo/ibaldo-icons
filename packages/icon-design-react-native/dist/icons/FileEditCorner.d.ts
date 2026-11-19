import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileEditCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileEditCorner: ForwardRefExoticComponent<FileEditCornerProps & RefAttributes<Svg>>;

export default FileEditCorner;
export { FileEditCorner };

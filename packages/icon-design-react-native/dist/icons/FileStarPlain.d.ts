import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileStarPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileStarPlain: ForwardRefExoticComponent<FileStarPlainProps & RefAttributes<Svg>>;

export default FileStarPlain;
export { FileStarPlain };

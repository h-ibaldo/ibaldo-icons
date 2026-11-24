import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileTrianglePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileTrianglePlain: ForwardRefExoticComponent<FileTrianglePlainProps & RefAttributes<Svg>>;

export default FileTrianglePlain;
export { FileTrianglePlain };

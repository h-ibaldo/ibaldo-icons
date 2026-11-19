import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileCodeRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileCodeRight: ForwardRefExoticComponent<FileCodeRightProps & RefAttributes<Svg>>;

export default FileCodeRight;
export { FileCodeRight };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileWinkPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileWinkPlain: ForwardRefExoticComponent<FileWinkPlainProps & RefAttributes<Svg>>;

export default FileWinkPlain;
export { FileWinkPlain };

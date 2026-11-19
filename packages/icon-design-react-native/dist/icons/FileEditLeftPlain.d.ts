import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileEditLeftPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileEditLeftPlain: ForwardRefExoticComponent<FileEditLeftPlainProps & RefAttributes<Svg>>;

export default FileEditLeftPlain;
export { FileEditLeftPlain };

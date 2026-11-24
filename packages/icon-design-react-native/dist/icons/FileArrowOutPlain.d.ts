import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowOutPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowOutPlain: ForwardRefExoticComponent<FileArrowOutPlainProps & RefAttributes<Svg>>;

export default FileArrowOutPlain;
export { FileArrowOutPlain };

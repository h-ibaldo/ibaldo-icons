import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileMinusCirclePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileMinusCirclePlain: ForwardRefExoticComponent<FileMinusCirclePlainProps & RefAttributes<Svg>>;

export default FileMinusCirclePlain;
export { FileMinusCirclePlain };

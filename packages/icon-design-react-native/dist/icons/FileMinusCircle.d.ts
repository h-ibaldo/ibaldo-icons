import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileMinusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileMinusCircle: ForwardRefExoticComponent<FileMinusCircleProps & RefAttributes<Svg>>;

export default FileMinusCircle;
export { FileMinusCircle };

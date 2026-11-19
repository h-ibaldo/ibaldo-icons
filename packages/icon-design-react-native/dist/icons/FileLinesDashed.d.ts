import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLinesDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLinesDashed: ForwardRefExoticComponent<FileLinesDashedProps & RefAttributes<Svg>>;

export default FileLinesDashed;
export { FileLinesDashed };

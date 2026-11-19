import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileStack: ForwardRefExoticComponent<FileStackProps & RefAttributes<Svg>>;

export default FileStack;
export { FileStack };

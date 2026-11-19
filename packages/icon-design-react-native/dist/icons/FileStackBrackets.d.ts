import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileStackBracketsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileStackBrackets: ForwardRefExoticComponent<FileStackBracketsProps & RefAttributes<Svg>>;

export default FileStackBrackets;
export { FileStackBrackets };

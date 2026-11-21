import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileCheckWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileCheckWide: ForwardRefExoticComponent<FileCheckWideProps & RefAttributes<Svg>>;

export default FileCheckWide;
export { FileCheckWide };

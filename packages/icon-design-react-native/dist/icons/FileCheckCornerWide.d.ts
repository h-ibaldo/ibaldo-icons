import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileCheckCornerWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileCheckCornerWide: ForwardRefExoticComponent<FileCheckCornerWideProps & RefAttributes<Svg>>;

export default FileCheckCornerWide;
export { FileCheckCornerWide };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileWide: ForwardRefExoticComponent<FileWideProps & RefAttributes<Svg>>;

export default FileWide;
export { FileWide };

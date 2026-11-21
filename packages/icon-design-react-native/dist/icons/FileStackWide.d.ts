import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileStackWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileStackWide: ForwardRefExoticComponent<FileStackWideProps & RefAttributes<Svg>>;

export default FileStackWide;
export { FileStackWide };

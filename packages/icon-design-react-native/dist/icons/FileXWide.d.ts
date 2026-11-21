import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileXWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileXWide: ForwardRefExoticComponent<FileXWideProps & RefAttributes<Svg>>;

export default FileXWide;
export { FileXWide };

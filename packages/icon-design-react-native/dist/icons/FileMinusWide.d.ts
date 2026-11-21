import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileMinusWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileMinusWide: ForwardRefExoticComponent<FileMinusWideProps & RefAttributes<Svg>>;

export default FileMinusWide;
export { FileMinusWide };

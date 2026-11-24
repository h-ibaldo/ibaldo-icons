import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileMinusCornerWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileMinusCornerWide: ForwardRefExoticComponent<FileMinusCornerWideProps & RefAttributes<Svg>>;

export default FileMinusCornerWide;
export { FileMinusCornerWide };

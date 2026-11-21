import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileXCornerWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileXCornerWide: ForwardRefExoticComponent<FileXCornerWideProps & RefAttributes<Svg>>;

export default FileXCornerWide;
export { FileXCornerWide };

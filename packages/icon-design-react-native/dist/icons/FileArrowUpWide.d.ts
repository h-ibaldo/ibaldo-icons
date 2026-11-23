import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArrowUpWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArrowUpWide: ForwardRefExoticComponent<FileArrowUpWideProps & RefAttributes<Svg>>;

export default FileArrowUpWide;
export { FileArrowUpWide };

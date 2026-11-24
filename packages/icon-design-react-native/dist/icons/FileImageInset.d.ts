import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileImageInsetProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileImageInset: ForwardRefExoticComponent<FileImageInsetProps & RefAttributes<Svg>>;

export default FileImageInset;
export { FileImageInset };
